import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {AppComponent} from "./app.component";
// import {NavbarComponent} from "./navbar/navbar.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path:'dashboard',
        component: DashboardComponent
      },

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
