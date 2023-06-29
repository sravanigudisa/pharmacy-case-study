import { Router } from '@angular/router';
import { DoctorSignupService } from './../shared/services/doctor-signup.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Doctor } from '../shared/models/doctor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  doctor: Doctor;

  constructor(
    private doctorsignupservice: DoctorSignupService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.reset();
    this.doctor = {
      DoctorName: '',
      DoctorId: '',
      Password: '',
      EmailId: '',
      Contact: '',
      Address: '',
    };
  }

  RedirectToLogin() {
    this.router.navigate(['/login']);
  }

  OnSubmit(form: NgForm) {
    this.doctorsignupservice.registerUser(form.value).subscribe((data: any) => {
      console.log(data);
      if (data) {
        this.resetForm(form);
        this.toastr.success('User registration successful');
        this.RedirectToLogin();
      }
    });
  }
}
