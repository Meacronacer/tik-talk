import { Component, OnInit } from '@angular/core';
import { InputComponent } from '../../shared/components/ui/input/input.component';
import { ButtonComponent } from '../../shared/components/ui/button/button.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, JsonPipe],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  public showPassword: boolean = false;
  public loginForm: FormGroup;


  constructor (private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      login: [''],
      password: [''],
    });
  }

  getControl (name: string) {
    return this.loginForm.get(name) as FormControl
  } 

  onFormSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

  onShowPasswordChange() {
    this.showPassword = !this.showPassword;
  }
}
