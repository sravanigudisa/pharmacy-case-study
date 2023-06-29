import { RoleGuard } from './../shared/role.guard';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginProcessService } from './../shared/services/login-process.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../shared/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Role: string = 'Please Choose Your Role';
  login: Login;

  constructor(
    private doctorsignupservice: LoginProcessService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.reset();
    this.login = {
      Password: '',
      EmailId: '',
    };
  }

  OnSubmit(form: NgForm) {
    if (form.value.role == 'Doctor') {
      this.doctorsignupservice
        .LoginDoctor(form.value)
        .subscribe((data: any) => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('role', form.value.role);
          localStorage.setItem('id', form.value.EmailId);
          this.toastr.success('Doctor Login successful');
          this.router.navigate(['/user']);
        });
    } else if (form.value.role == 'Admin') {
      this.doctorsignupservice.LoginAdmin(form.value).subscribe((data: any) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', form.value.role);
        this.toastr.success('Admin login successful');
        this.router.navigate(['/admin']);
      });
    } else {
      this.toastr.error('Check your Credentials and Role');
    }
  }
}
