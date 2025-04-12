import {Injectable} from "@angular/core";
import {DynamicField} from "../models/dynamic.model";

@Injectable({
    providedIn: 'root'
})
export class FormsMasterConfig {

    buyerFormFields: DynamicField[] = [
        {
            name: 'code',
            label: 'Code',
            type: 'text',
            placeholder: 'Code',
            validators: [{type: 'required'}, {type: 'minLength', value: 3}]
        },
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'Name',
            validators: [{type: 'required'}, {type: 'minLength', value: 3}]
        }
    ];

    comboFormFields: DynamicField[] = [
        {
            name: 'code',
            label: 'Code',
            type: 'text',
            placeholder: 'Code',
            validators: [{type: 'required'}, {type: 'minLength', value: 3}]
        },
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'Name',
            validators: [{type: 'required'}, {type: 'minLength', value: 3}]
        }
    ];

    formFields = [
        {
            name: 'username',
            label: 'Username',
            type: 'text',
            placeholder: 'Enter your username',
            validators: [{type: 'required'}, {type: 'minLength', value: 3}]
        },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: 'Enter your email',
            validators: [{type: 'required'}, {type: 'email'}]
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            placeholder: 'Enter password',
            validators: [{type: 'required'}, {type: 'minLength', value: 6}]
        }
    ];
}