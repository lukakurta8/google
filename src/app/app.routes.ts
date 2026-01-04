import { Routes } from '@angular/router';
import { Password } from './password/password';
import { Login } from './login/login';
import { Users } from './users/users';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'Login', component: Password},
    {path: 'users69', component: Users}
];
