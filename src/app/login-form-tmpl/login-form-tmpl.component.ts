import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login-form-tmpl',
  templateUrl: './login-form-tmpl.component.html',
  styleUrls: ['./login-form-tmpl.component.css']
})
export class LoginFormTmplComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
