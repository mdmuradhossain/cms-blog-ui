import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SignUpRequest } from './signup-request.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpRequest: SignUpRequest;
  signUpForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.signUpRequest = {
      username: '',
      email: '',
      password: '',
    };
  }

  ngOnInit(): void {}

  signUp() {
    this.signUpRequest.username = this.signUpForm.get('username')?.value;
    this.signUpRequest.email = this.signUpForm.get('email')?.value;
    this.signUpRequest = this.signUpForm.get('password')?.value;

    this.authService.signUp(this.)
  }
}
