import {Component} from '@angular/core';
import {MasterDynamicFormComponent} from "../../../shared/master-dynamic-form/master-dynamic-form.component";
import {FormsMasterConfig} from '../../../../utils/forms.master';

@Component({
  selector: 'app-dynamic-form',
  imports: [MasterDynamicFormComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {

  constructor(private masterFormConfig : FormsMasterConfig) {}

  getFormConfig() {
    return this.masterFormConfig.buyerFormFields;
  }

  handleFormSubmit(data: any) {
    console.log('Form Submitted in dynamic form :', data);
  }
}
