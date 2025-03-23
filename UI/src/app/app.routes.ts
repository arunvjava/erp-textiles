import { Routes } from '@angular/router';
import { LoginComponent } from './components/views/login/login.component';
import { HomeComponent } from './components/views/home/home.component';
import { BrandComponent } from './components/views/brand/brand.component';
import { LogoutComponent } from './components/views/logout/logout.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'brand', component: BrandComponent }
        ]
    },

];
