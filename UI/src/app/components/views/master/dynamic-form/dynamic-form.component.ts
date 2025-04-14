import {Component, OnInit} from '@angular/core';
import {MasterDynamicFormComponent} from "../../../shared/master-dynamic-form/master-dynamic-form.component";
import {FormsMasterConfig} from '../../../../utils/forms.master';
import {DynamicTableComponent} from "../../../shared/dynamic-table/dynamic-table.component";
import {BrandService} from '../../../../services/master/brand/brand.service';

@Component({
  selector: 'app-dynamic-form',
  imports: [MasterDynamicFormComponent, DynamicTableComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit {

  isDataLoading = false;

  constructor(
    private masterFormConfig: FormsMasterConfig) { }

  ngOnInit(): void {
    console.log('Ng oninit');
  }

  getIsDataLoading() {
    return this.isDataLoading;
  }
  getData() {
    this.isDataLoading = true;
    return [
      {name: 'Alice', age: 25, job: 'Developer'},
      {name: 'Bob', age: 30, job: 'Designer'},
      {name: 'Charlie', age: 28, job: 'Manager'}
    ];
  }

  getFormConfig() {
    return this.masterFormConfig.buyerFormFields;
  }

  getTableColumnNames() {
    return ['name', 'age', 'job'];
  }

  handleFormSubmit(data: any) {
    console.log('Form Submitted in dynamic form :', data);
  }
}
