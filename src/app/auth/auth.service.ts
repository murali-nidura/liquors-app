import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../types/Auth';
import { getDatabase, onValue, ref, set } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }
  isLoading: boolean = false;
  passwordMatch: boolean = true;
  isAuthenticated: boolean = false;
  loggedInUserFirstName: string='';
  user: any;

  login(form: LoginForm) {
    if (this.isLoading)
      return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        // ...
        this.user= this.getUserInfo(userCredential.user.uid);
        this.loggedInUserFirstName = this.user.firstName;
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        this.isLoading = false;
        this.isAuthenticated = false;
      }).finally(() => (this.isLoading = false));
  }

  register(form: RegisterForm) {
    if (this.isLoading)
      return;
    this.isLoading = true;
    if (form.password != form.confirm_password) {
      this.passwordMatch = false;
      this.isLoading = false;
      alert('Password not confirmed');
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        // ...
        this.isLoading = true;
        // console.log(userCredential);
        //save user details to db
        this.saveUserDetails(form, userCredential.user.uid);
        //
        this.isAuthenticated = true;
        alert('User Registered Successfully! Please Login!');
        this.router.navigate(['login']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        if (errorCode == "auth/email-already-in-use") {
          alert('User Already Registered! Please Login!');
          this.router.navigate(['login']);
        }
        // ..
      }).finally(() => (this.isLoading = false));
  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.isAuthenticated = false;
      this.router.navigate(['login']);
    }).catch((error) => {

    });
  }

  saveUserDetails(form: RegisterForm, uid: string) {
    //create data
    const db = getDatabase();
    set(ref(db, 'users/' + uid), {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      mobile: form.mobileNum
    });
    // alert('user created!');
  }

  getUserInfo(uid: string): any {
    const db = getDatabase();
    const userInfo = ref(db,'users/'+uid);
    data : Object;
    onValue(userInfo, (snapshot)=>{
      this.user= snapshot.val();
    })
    return this.user;
  }

}
 

