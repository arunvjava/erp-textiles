import { Brand } from './../../../../models/brand.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandService } from '../../../../services/master/brand/brand.service';
import { HelperUtils } from '../../../../utils/helper.model.util';
import { DialogService } from '../../../../services/dialog/dialog.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule, SortDirection } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { NgIf } from '@angular/common';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-brand',
  imports: [ReactiveFormsModule, NgIf, MatTableModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatSort, MatSortModule, MatPaginator, MatPaginatorModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit {

  isEnableBrandTemplate = false;
  isUpdateDisabled = true;
  brandTemplateBtnName = 'Create';
  avlBrands: Brand[] = [];
  displayedColumns: string[] = ['select', 'id', 'code', 'name'];
  dataSource = new MatTableDataSource<Brand>();
  selection = new SelectionModel<Brand>(true, []);

  // Table related variables
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private brandService: BrandService,
    private helperUtils: HelperUtils,
    private dialogSerivce: DialogService
  ) { }


  ngOnInit(): void {
    this.getAllBrands();
    console.log(this.selection.selected.length);
  }

  enableBrandTemplate() {
    this.isEnableBrandTemplate = !this.isEnableBrandTemplate;
    this.brandTemplateBtnName = this.brandTemplateBtnName === 'Create' ? 'Close' : 'Create';
  }

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

  openInfoDialog() {
    this.dialogSerivce.openInfoDialog('Info Action', '')
      .subscribe(result => {
        if (result) {
          console.log('User confirmed action');
          this.getAllBrands();
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
      this.openInfoDialog();
    })
  }

  getAllBrands() {
    this.isLoadingResults = true;
    this.brandService.getAllBrands().subscribe(
      (resp) => {
        this.isLoadingResults = false;
        this.avlBrands = resp.respObj;
        this.dataSource = new MatTableDataSource<Brand>(this.avlBrands);
      }, (error) => {
        this.isLoadingResults = false;
        this.dialogSerivce.openInfoDialog('Failed', 'Failed to retrieve!')
      }
    );
  }

  getBrandName(): string {
    return this.brandForm.get('name')?.value as string;
  }

  getBrandCode() {
    return this.brandForm.get('code')?.value as string;
  }

  /**
   * Table related operations
   */
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Brand): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.brandId + 1}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete() {
    this.isLoadingResults = true;
    console.log(this.selection.selected);
    let selectedBrandIDs: string[] = [];
    this.selection.selected.forEach(brand => {
      console.log(brand.brandId);
      selectedBrandIDs.push(brand.brandId);
    });

    if (selectedBrandIDs.length == 0) {
      return;
    }

    this.brandService.deleteBrands(selectedBrandIDs).subscribe(
      (resp) => {
        this.isLoadingResults = false;
        console.log('Successfully deleted');
        this.getAllBrands();
      }, (error) => {
        this.isLoadingResults = false;
        console.log(error);
      }
    );

  }

  update() {

  }

}
