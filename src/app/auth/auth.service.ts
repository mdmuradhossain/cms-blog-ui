import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpRequest } from './signup/signup-request.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = '';

  constructor(private http: HttpClient) {}

  signUp(signUpRequest: SignUpRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/signup`, signUpRequest, {
      responseType: 'text',
    });
  }
}
