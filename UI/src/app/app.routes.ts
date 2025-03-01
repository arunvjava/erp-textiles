import { Routes } from '@angular/router';
import { LoginComponent } from './components/views/login/login.component';
import { HomeComponent } from './components/views/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
];
