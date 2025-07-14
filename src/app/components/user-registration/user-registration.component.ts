import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl, FormArray } from '@angular/forms';


import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-registration',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule
  ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  userService = inject(UserService);

  registrationStatus: {success: boolean, message: string} = {
    success: false,
    message: 'Not attempted yet'
  }

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    address: new FormGroup({
      area: new FormControl(''),
      road: new FormControl('')
    }),
    phone: new FormArray([
      new FormGroup({
        number: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required)
      })
    ]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)])
  },
  this.passwordConfirmValidator,
)

  passwordConfirmValidator(control: AbstractControl): {[key: string]: boolean} | null {
    const form = control as FormGroup;
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({passwordMismatch: true})
      return {passwordMismatch: true}
    } else {

    }

    return null;
  }

  phone = this.form.get('phone') as FormArray;

  addPhoneNumber() {
    this.phone.push(
      new FormGroup({
        number: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required)
      })
    )
  }

  removePhoneNumber(index: number) {
    this.phone.removeAt(index);
  }

  onSubmit() {
    const data = this.form.value as User;
    // console.log(this.form.value);
    // const data: User = {
    //   'username': this.form.value.username || '',
    //   'password': this.form.value.password || '',
    //   'name': this.form.value.name || '',
    //   'surname': this.form.value.surname || '',
    //   'email': this.form.value.email || '',
    //   'address': {
    //     'area': this.form.value.address?.area || '',
    //     'road': this.form.value.address?.road || ''
    //   }
    // }
    console.log(data);
    this.userService.registerUser(data)
      .subscribe({
        next: (response) => {
          console.log("User saved", response);
          this.registrationStatus = {success: true, message: 'User registered'};
        },
        error: (response) => {
          console.log("User not saved", response);
          this.registrationStatus = {success: false, message: response.error.data.errorResponse.errmsg};
          
        },
      })
  }

  // Η Σειρα ειναι user-registration.component.html -> user-registration.component.ts -> (backend) user.routes.js -> user.controller.js -> (frontend) user.service.ts
  // Επισης σιγουρευομαστε οτι στο backend το cors ειναι σωστα.
  checkDuplicateEmail() {
    const email = this.form.get('email')?.value;

    if (email) {
      console.log("Email>>", email)
      this.userService.check_duplicate_email(email)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.form.get('email')?.setErrors(null)
          },
          error: (response) => {
            console.log(response);
            const message = response.data
            console.log(message);
            this.form.get('email')?.setErrors({duplicateEmail: true})
          }
        })
    }
  }

  registerAnother() {
    this.form.reset();
    this.registrationStatus = {success: false, message: "Not attempted yet"}
  }

  setValue() {
    this.form.setValue({
      username: 'johnd',
      name: 'john',
      surname: 'doe',
      email: 'johnis@aueb.gr',
      address: {
        area: 'area1',
        road: 'road1'
      },
      phone: [{
        number: "6912345678",
        type: 'Mobile'
      }],
      password: '12345',
      confirmPassword: '12345'
    })
  }
}
