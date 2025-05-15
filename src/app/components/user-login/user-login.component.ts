import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Credentials, LoggedInUser } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';
import { jwtDecode } from 'jwt-decode';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit{
  userService = inject(UserService);
  router = inject(Router);
  route = inject(ActivatedRoute)

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        const access_token = params['token'];

        if (access_token) {
          localStorage.setItem('access_token', access_token)

          this.userService.getToken();
          this.router.navigate(['user-registration'])
        }
      })
  }

  onSubmit() {
    console.log(this.form.value);
    const credentials = this.form.value as Credentials

    this.userService.loginUser(credentials)
      .subscribe({
        next: (response) => {
          console.log("Logged in", response)
          const accessToken = response.data;
          localStorage.setItem('access_token', accessToken);

          // const decodedTokenSubject = jwtDecode(accessToken) as unknown as LoggedInUser;
          // console.log(decodedTokenSubject)

          // this.userService.user$.set({
          //   username: decodedTokenSubject.username,
          //   email: decodedTokenSubject.email,
          //   roles: decodedTokenSubject.roles
          // })
          this.userService.getToken();

          console.log("SIGNAL>>", this.userService.user$())

          this.router.navigate(['user-registration'])
        },
        error: (error) => {
          console.log("Not logged in", error)
        }
      })
  }

  googleLogin() {
    this.userService.redirectToGoogleLogin();
  }
}
