import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class LoginProcessService {
  readonly rootUrl = 'https://localhost:44348';

  constructor(private http: HttpClient) {}

  LoginDoctor(doctor: Login) {
    const body: Login = {
      EmailId: doctor.EmailId,
      Password: doctor.Password,
    };

    return this.http.post(this.rootUrl + '/api/DoctorLogin', body);
  }

  LoginAdmin(doctor: Login) {
    const body: Login = {
      EmailId: doctor.EmailId,
      Password: doctor.Password,
    };

    return this.http.post(this.rootUrl + '/api/AdminLogin', body);
  }

  LoggedIn() {
    return !!localStorage.getItem('token');
  }
}
