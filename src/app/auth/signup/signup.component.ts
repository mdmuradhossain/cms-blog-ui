import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  signUp() {
    this.signUpRequest.username = this.signUpForm.get('username')?.value;
    this.signUpRequest.email = this.signUpForm.get('email')?.value;
    this.signUpRequest = this.signUpForm.get('password')?.value;

    this.authService.signUp(this.signUpRequest).subscribe(
      () => {
        this.router.navigate([''], {
          queryParams: { registered: 'true' },
        });
      },
      (err) => {
        // this.toastr.error('Registration Failed! Please try again');
        console.log(err);
      }
    );
  }
}
