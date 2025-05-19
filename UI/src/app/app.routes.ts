import {Routes} from '@angular/router';
import {LoginComponent} from './components/views/login/login.component';
import {HomeComponent} from './components/views/home/home.component';
import {LogoutComponent} from './components/views/logout/logout.component';
import {BrandComponent} from './components/views/master/brand/brand.component';
import {ColorComponent} from './components/views/master/color/color.component';
import {CustomerOrderComponent} from './components/views/merchandising/customer-order/customer-order.component';
import {DynamicFormComponent} from './components/views/master/dynamic-form/dynamic-form.component';
import {ComboComponent} from './components/views/master/combo/combo.component';
import {HsnComponent} from './components/views/master/hsn/hsn.component';
import {BuyerComponent} from './components/views/master/buyer/buyer.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {
        path: 'home', component: HomeComponent,
        children: [
            {path: 'brand', component: BrandComponent},
            {path: 'buyer', component: BuyerComponent},
            {path: 'color', component: ColorComponent},
            {path: 'cust-order', component: CustomerOrderComponent},
            {path: 'combo', component: ComboComponent},
            {path: 'dynamic-form', component: DynamicFormComponent},
            {path: 'hsn', component: HsnComponent},
        ]
    },
];
