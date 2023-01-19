import { Route } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

export default [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
] as Route[];
