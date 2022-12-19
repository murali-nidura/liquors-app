import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/Auth';
import { AuthService } from '../auth.service';
import { getDatabase, ref, set } from 'firebase/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  form: RegisterForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm_password: '',
  }
  passwordMatch: boolean = true;
  submit() {
    this.authService.register(this.form);
    // this.saveUserDetails(this.form);
  }
  isLoading() {
    return this.authService.isLoading;
  }

  // saveUserDetails(form: RegisterForm) {
  //   //create data
  //   const db = getDatabase();
  //   set(ref(db, 'users/' + form.mobileNum), {
  //     firstName: form.firstName,
  //     lastName: form.lastName,
  //     email: form.email
  //   });
  //   // alert('user created!');
  // }

}
