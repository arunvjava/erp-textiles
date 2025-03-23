import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandService } from '../../../../services/master/brand/brand.service';
import { HelperUtils } from '../../../../utils/helper.model.util';
import { DialogService } from '../../../../services/dialog/dialog.service';
import { Brand } from '../../../../models/brand.model';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-brand',
  imports: [ReactiveFormsModule, MatTableModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit {

  constructor(
    private brandService: BrandService,
    private helperUtils: HelperUtils,
    private dialogSerivce: DialogService
  ) { }


  ngOnInit(): void {  }

  brandForm = new FormGroup({
    code: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required])
  });

  // openDialog() {
  //   this.dialogSerivce.openConfirmationDialog('Confirm Action', 'Are you sure you want to proceed?')
  //     .subscribe(result => {
  //       if (result) {
  //         console.log('User confirmed action');
  //       } else {
  //         console.log('User canceled action');
  //       }
  //     });
  // }

  openDialog() {
    this.dialogSerivce.openInfoDialog('Info Action', '')
      .subscribe(result => {
        if (result) {
          console.log('User confirmed action');
        } else {
          console.log('User canceled action');
        }
      });
  }

  saveBrand() {
    console.log('Brand form data->', this.brandForm.value);
    let brand: Brand = { code: '', name: '', brandId: '' };
    brand.code = this.getBrandCode();
    brand.name = this.getBrandName();

    this.brandService.saveBrand(this.brandForm.value as string).subscribe(resp => {
      console.log("Api response :" + resp.message);
      this.helperUtils.resetForm(this.brandForm)
      this.openDialog();
    })
  }



  getBrandName(): string {
    return this.brandForm.get('name')?.value as string;
  }

  getBrandCode() {
    return this.brandForm.get('code')?.value as string;
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];