import {Injectable} from "@angular/core";
import {DynamicField} from "../models/dynamic.model";
import {Menu} from "../models/menu.model";

@Injectable({
    providedIn: 'root'
})
export class MenuMaster {
    dynamicLinks: Menu[] = [
        {
            menuname: 'Dashboard',
            hyperlink: '/home',
            collapsible: false,
            collapseName: '',
            submenu: []
        },
        {
            menuname: 'Master',
            hyperlink: '',
            collapsible: true,
            collapseName: 'masterCollapse',
            submenu: [
                {
                    menuname: 'Brand',
                    hyperlink: '/home/brand'
                },
                {
                    menuname: 'Buyer',
                    hyperlink: '/home/buyer'
                },
                {
                    menuname: 'Color',
                    hyperlink: '/home/color'
                },
                {
                    menuname: 'Combo',
                    hyperlink: '/home/combo'
                },
                {
                    menuname: 'Counts',
                    hyperlink: '/home/counts'
                },
                {
                    menuname: 'Currency',
                    hyperlink: '/home/currency'
                },
                {
                    menuname: 'Customer',
                    hyperlink: '/home/customer'
                },
                {
                    menuname: 'Cutting Waste',
                    hyperlink: '/home/cutting-waste'
                },
                {
                    menuname: 'Department',
                    hyperlink: '/home/department'
                },
                {
                    menuname: 'Delivery Address',
                    hyperlink: '/home/delivery-addr'
                },
                {
                    menuname: 'Designation Port',
                    hyperlink: '/home/designation-port'
                }
            ]
        },
        {
            menuname: 'Merchandising',
            hyperlink: '/merchandising',
            collapsible: true,
            collapseName: 'merchandisingCollapse',
            submenu: [
                {
                    menuname: 'Customer Order',
                    hyperlink: '/home/brand'
                },
                {
                    menuname: 'Work Order',
                    hyperlink: '/home/buyer'
                }
            ]
        },
    ];
}