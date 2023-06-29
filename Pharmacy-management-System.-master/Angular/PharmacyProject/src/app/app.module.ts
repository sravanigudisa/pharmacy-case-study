import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { EmailService } from './shared/services/email.service';
import { OrdersService } from './shared/services/orders.service';
import { CartService } from './shared/services/cart.service';
import { AuthGuard } from './shared/auth.guard';
import { DoctorSignupService } from './shared/services/doctor-signup.service';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AdmindrugsComponent } from './admindrugs/admindrugs.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { LoginProcessService } from './shared/services/login-process.service';
import { DrugService } from './shared/services/drug.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CartComponent } from './cart/cart.component';
import { SalesComponent } from './sales/sales.component';
import { MyordersComponent } from './myorders/myorders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    SupplierComponent,
    AdmindrugsComponent,
    OrderdetailsComponent,
    CartComponent,
    SalesComponent,
    MyordersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
  ],
  providers: [
    DoctorSignupService,
    AuthGuard,
    LoginProcessService,
    DrugService,
    CartService,
    OrdersService,
    EmailService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
