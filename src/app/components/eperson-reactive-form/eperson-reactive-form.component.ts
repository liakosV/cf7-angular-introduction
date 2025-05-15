import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from 'src/app/shared/interfaces/eperson';


@Component({
  selector: 'app-eperson-reactive-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
    ],
  templateUrl: './eperson-reactive-form.component.html',
  styleUrl: './eperson-reactive-form.component.css'
})
export class EpersonReactiveFormComponent {
  @Output() person = new EventEmitter<EPerson>()

  form = new FormGroup({
    givenName: new FormControl('', Validators.required),
    surName: new FormControl('', Validators.required),
    age: new FormControl(18, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(18),
      Validators.max(99)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    education: new FormControl('', Validators.required)
  })

  // form = new FormGroup<{
  //   givenName: FormControl<string>,
  //   surName: FormControl<string>,
  //   age: FormControl <number>,
  //   email: FormControl<string>,
  //   education: FormControl<string>
  // }>({
  //   givenName: new FormControl('', {nonNullable:true, validators: Validators.required}),
  //   surName: new FormControl('', {nonNullable: true, validators: Validators.required}),
  //   age: new FormControl(18, {
  //     nonNullable: true,
  //     validators:[ 
  //       Validators.required,
  //       Validators.min(18),
  //       Validators.max(99)
  //     ]}),
  //   email: new FormControl('', {nonNullable: true, validators: Validators.required}),
  //   education: new FormControl('', {nonNullable: true, validators: [ Validators.required, Validators.email ]})
  // })

  onSubmit() {
    if(this.form.valid) {
      console.log(this.form.value);
      const person: EPerson = {
        givenName: this.form.value.givenName ?? '',
        surName: this.form.value.surName ?? '',
        age: String (this.form.value.age) ?? '',
        email: this.form.value.email ?? '',
        education: this.form.value.education ?? ''
      }
      this.person.emit(person);
      this.form.reset();
    }
    // console.log(data)
    // console.log(this.form.get('givenName')?.value);
    // this.form.get('surName')?.setValue('papakis');
  }

  onSetValue() {
    this.form.setValue({
      givenName: 'John',
      surName: 'Doe',
      age: 40,
      email: 'john@aueb.gr',
      education: "Bachelor's degree"
    })
  }
}
