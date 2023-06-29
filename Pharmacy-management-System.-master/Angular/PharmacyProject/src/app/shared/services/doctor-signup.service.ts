import { Doctor } from '../models/doctor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DoctorSignupService {
  readonly rootUrl = 'https://localhost:44348';

  constructor(private http: HttpClient) {}

  registerUser(doctor: Doctor) {
    const body: Doctor = {
      DoctorId: doctor.DoctorId,
      DoctorName: doctor.DoctorName,
      Contact: doctor.Contact,
      Address: doctor.Address,
      EmailId: doctor.EmailId,
      Password: doctor.Password,
    };
    return this.http.post(
      this.rootUrl + '/api/Doctor/DoctorRegistration',
      body
    );
  }
}
