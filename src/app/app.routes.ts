import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: ()=>import("./features/auth/ecommerce-login/ecommerce-login").then(m=>m.EcommerceLogin)
    }
];
