import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/shared/confirm-dialog/confirm-dialog.component';
import { InfoDialogComponent } from '../../components/shared/info-dialog/info-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmationDialog(title: string, message: string) {
    return this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container',
      data: { title, message }
    }).afterClosed();
  }

  openInfoDialog(title: string, message: string) {
    return this.dialog.open(InfoDialogComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container',
      data: { title, message }
    }).afterClosed();
  }

}
