import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form-reactive',
  templateUrl: './login-form-reactive.component.html',
  styleUrls: ['./login-form-reactive.component.css']
})
export class LoginFormReactiveComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {

      if (this.loginForm.controls.password.invalid) {
        console.log('Chưa nhập mật khẩu');
      }

      if (this.loginForm.controls.username.invalid) {
        console.log('Chưa nhập tên đăng nhập');
      }
    }
  }

  get username() {
    return this.loginForm.controls.username;
  }

  get password() {
    return this.loginForm.controls.password;
  }

}
