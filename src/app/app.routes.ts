import { Routes } from '@angular/router';
import { LOGIN_ROUTES } from './login/auth.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
        // loadChildren: () => import('./login/auth.routes').then(r => r.LOGIN_ROUTES)
    },
    {
        path: '',
        loadChildren: () => import('./login/auth.routes').then(r => r.LOGIN_ROUTES)
    }

];
