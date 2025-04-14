import {Component, NgModule} from '@angular/core';
import {FormsMasterConfig} from '../../../../utils/forms.master';
import {MasterDynamicFormComponent} from '../../../shared/master-dynamic-form/master-dynamic-form.component';
import {DynamicTableComponent} from '../../../shared/dynamic-table/dynamic-table.component';
import {ComboService} from '../../../../services/master/combo/combo.service';
import {MatSlideToggleChange, MatSlideToggleModule} from '@angular/material/slide-toggle';
import {DialogService} from '../../../../services/dialog/dialog.service';
import {Combo} from '../../../../models/master/combo.model';
import {FormsModule, NgModel} from '@angular/forms';

@Component({
  selector: 'app-combo',
  imports: [MasterDynamicFormComponent, DynamicTableComponent, MatSlideToggleModule, FormsModule],
  templateUrl: './combo.component.html',
  styleUrl: './combo.component.css'
})
export class ComboComponent {

  isDataLoading = false;
  comboData: Combo[] = [];
  createCombo: boolean = false;
  formAction = 'Create';

  // Map: column keys -> labels
  columnMap = new Map<string, string>([
    ['select', 'Select'],
    ['comboId', 'ID'],
    ['code', 'Code'],
    ['name', 'Name']
  ]);

  constructor(
    private masterFormConfig: FormsMasterConfig,
    private comboService: ComboService,
    private dialogSerivce: DialogService
  ) { }

  ngOnInit(): void {
    console.log('Ng oninit');
    this.getCombos();
  }

  onToggle(event: MatSlideToggleChange) {
    this.createCombo = event.source.checked;
    this.createCombo ? this.formAction = 'Close' : this.formAction = 'Create';
    console.log('Toggled:', this.createCombo);
  }

  getCombos() {
    this.isDataLoading = true;
    this.comboService.getAllCombos().subscribe(
      (resp) => {
        this.isDataLoading = false;
        this.comboData = resp.respObj.content;
      }, (error) => {
        this.isDataLoading = false;
        this.dialogSerivce.openInfoDialog('Failed', 'Failed to retrieve!')
      }
    );
  }

  getIsDataLoading() {
    return this.isDataLoading;
  }

  getData() {
    return this.comboData;
  }

  getFormConfig() {
    return this.masterFormConfig.buyerFormFields;
  }


  handleFormSubmit(data: any) {
    console.log('Form Submitted in dynamic form :', data);
    this.comboService.saveCombo(data).subscribe(
      (resp) => {
        console.log(resp.message);
        this.getCombos();
      }
    )
  }
}
