import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/shared/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(title: string, message: string) {
    return this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { title, message }
    }).afterClosed();
  }
}
