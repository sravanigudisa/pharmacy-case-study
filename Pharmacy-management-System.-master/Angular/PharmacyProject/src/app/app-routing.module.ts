import { MyordersComponent } from './myorders/myorders.component';
import { SalesComponent } from './sales/sales.component';
import { CartComponent } from './cart/cart.component';
import { RoleGuard } from './shared/role.guard';
import { AuthGuard } from './shared/auth.guard';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdmindrugsComponent } from './admindrugs/admindrugs.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { SignupComponent } from './signup/signup.component';
import { SupplierComponent } from './supplier/supplier.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'myorders', component: MyordersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserdashboardComponent, canActivate: [AuthGuard] },
  {
    path: 'admin',
    component: AdmindashboardComponent,
    canActivate: [RoleGuard],
  },
  { path: 'supplier', component: SupplierComponent, canActivate: [RoleGuard] },
  {
    path: 'admindrug',
    component: AdmindrugsComponent,
    canActivate: [RoleGuard],
  },
  {
    path: 'adminorders',
    component: OrderdetailsComponent,
    canActivate: [RoleGuard],
  },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
