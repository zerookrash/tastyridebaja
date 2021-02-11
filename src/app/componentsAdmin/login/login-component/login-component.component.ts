import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators, FormGroup } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]]
    });

  }

  save(event: Event) {
    if (this.form.valid) {
      event.preventDefault();
      const value = this.form.value;
      this.authService.loginEmailUser( value.email, value.pass )
    .then( res => {
      this.router.navigate(['/admin/dasboard']);
    })
    .catch( err => {
      console.error('err', err.message);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${err.message}`
      });
    });
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }

  get emailField() {
    return this.form.get('email');
  }

  get passField() {
    return this.form.get('pass');
  }

  // Login con Firebase

  // onLogin() : void{
  //   this.authService.loginEmailUser( this.emailField, this.passField )
  //   .then( res => {
  //     this.router.navigate(['/admin/contenido']);
  //   })
  //   .catch( err => console.log('err', err.message));
  // }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
      .then( (res) => {
        console.log('resUser', res);
        this.router.navigate(['/admin/dasboard']);
      })
      .catch( err => console.log('err', err.message));
  }


  onLogOut() {
    this.authService.logoutUser();
  }

}
