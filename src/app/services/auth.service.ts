import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { auth } from 'firebase/auth';

import firebase from "firebase/app";
const auth = firebase.auth;
import "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afsAuth: AngularFireAuth,
    private router: Router
  ) { }

  loginEmailUser(email: string, pass: string) {
    return new Promise( (res, req) => {
      this.afsAuth.signInWithEmailAndPassword(email, pass)
        .then( userData => res( userData ),
        err => req(err));
    });
  }

  loginGoogleUser() {
    return this.afsAuth.signInWithPopup( new auth.GoogleAuthProvider() );
  }

  logoutUser() {
    return this.afsAuth.signOut();
  }

  isAuth() {
    return this.afsAuth.authState.pipe(
      map( auth => auth)
    );
  }
}
