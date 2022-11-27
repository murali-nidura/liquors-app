import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/Auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  form : RegisterForm={
    email: '',
    password: '',
    confirm_password: '',
  }
  passwordMatch: boolean = true;
  submit(){
    this.authService.register(this.form);
  }
  isLoading(){
    return this.authService.isLoading;
  }

}
