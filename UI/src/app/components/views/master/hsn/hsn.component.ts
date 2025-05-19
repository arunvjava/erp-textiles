import {SelectionModel} from '@angular/cdk/collections';
import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {HSN} from '../../../../models/master/hsn.model';
import {NgIf} from '@angular/common';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule, MatSlideToggleChange} from '@angular/material/slide-toggle';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {DialogService} from '../../../../services/dialog/dialog.service';
import {ColorService} from '../../../../services/master/color/color.service';
import {HelperUtils} from '../../../../utils/helper.model.util';

@Component({
  selector: 'app-hsn',
  imports: [ReactiveFormsModule, NgIf, MatTableModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatSort, MatSortModule, MatPaginator, MatPaginatorModule, MatSlideToggleModule],
  templateUrl: './hsn.component.html',
  styleUrl: './hsn.component.css'
})
export class HsnComponent {

  colorId = '';
  avlHSNs: HSN[] = [];

  // Table related variables
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  displayedColumns: string[] = ['select', 'id', 'code', 'name'];
  dataSource = new MatTableDataSource<HSN>();
  selection = new SelectionModel<HSN>(true, []);

  colorTemplateBtnName = 'Create';
  isEnableCreateTemplate = false;
  actionBtnName = 'Save';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private colorService: ColorService,
    private helperUtils: HelperUtils,
    private dialogSerivce: DialogService
  ) { }

  ngOnInit(): void {
    this.isLoadingResults = false;
    console.log(this.selection.selected.length);
    this.getAllColors();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  enableColorTemplate(event: MatSlideToggleChange) {
    this.isEnableCreateTemplate = !this.isEnableCreateTemplate;
    this.colorTemplateBtnName = this.colorTemplateBtnName === 'Create' ? 'Close' : 'Create';
  }

  colorForm = new FormGroup({
    code: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required])
  });

  openInfoDialog(infoHeader: string) {
    this.dialogSerivce.openInfoDialog(infoHeader, '')
      .subscribe(result => {
        if (result) {
          console.log('User confirmed action');
        } else {
          console.log('User canceled action');
        }
      });
  }

  getColorName(): string {
    return this.colorForm.get('name')?.value as string;
  }

  getColorCode() {
    return this.colorForm.get('code')?.value as string;
  }

  saveColor() {
    // console.log('Color form data->', this.colorForm.value);
    // // Update Logic
    // if (this.colorId !== undefined && this.colorId !== '') {
    //   let updateBrandVal: HSN = {
    //     colorId: this.colorId,
    //     code: this.getColorCode(),
    //     name: this.getColorName()
    //   };
    //   this.colorService.updateBrand(updateBrandVal).subscribe(
    //     (resp) => {
    //       this.helperUtils.resetForm(this.colorForm);
    //       this.openInfoDialog('Updated Successfully!');
    //       this.getAllColors();
    //     }
    //   )
    // } else { //Save Logic
    //   let color: Color = {code: '', name: '', colorId: ''};
    //   color.code = this.getColorCode();
    //   color.name = this.getColorName();

    //   this.colorService.saveBrand(this.colorForm.value as string).subscribe(resp => {
    //     console.log("Api response :" + resp.message);
    //     this.helperUtils.resetForm(this.colorForm);
    //     this.openInfoDialog('Saved Successfully!');
    //     this.getAllColors();
    //   })
    // }

    // this.colorId = '';
  }

  update() {

  }

  delete() {

  }

  getAllColors() {
    // this.isLoadingResults = true;

    // this.colorService.getAllColors().subscribe(
    //   (resp) => {
    //     this.isLoadingResults = false;
    //     this.avlHSNs = resp.respObj;
    //     this.dataSource = new MatTableDataSource<HSN>(this.avlHSNs);
    //     this.selection.clear();
    //     this.resultsLength = this.avlHSNs.length;
    //     this.dataSource.paginator = this.paginator;
    //   }, (error) => {
    //     this.isLoadingResults = false;
    //     this.dialogSerivce.openInfoDialog('Failed', 'Failed to retrieve!')
    //   }
    // );
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
  checkboxLabel(row?: HSN): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.hsnId + 1}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
