import { Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

export const LOGIN_ROUTES: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login.component').then(com => com.LoginComponent)
        // component: LoginComponent
    },
    {
        path: 'forgot-password',
        // component: ForgotPasswordComponent
        loadComponent: () => import('./forgot-password/forgot-password.component').then(com => com.ForgotPasswordComponent)
    },
    {
        path: 'signup',
        component: SignUpComponent
        // loadComponent: () => import('./forgot-password/forgot-password.component').then(com => com.ForgotPasswordComponent)
    },
];

