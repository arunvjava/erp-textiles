import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandService } from '../../../../services/master/brand/brand.service';
import { HelperUtils } from '../../../../utils/helper.model.util';
import { DialogService } from '../../../../services/dialog/dialog.service';
import { Brand } from '../../../../models/brand.model';


@Component({
  selector: 'app-brand',
  imports: [ReactiveFormsModule],
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
      this.helperUtils.resetForm(this.brandForm);
    })
  }



  getBrandName(): string {
    return this.brandForm.get('name')?.value as string;
  }

  getBrandCode() {
    return this.brandForm.get('code')?.value as string;
  }

}
