import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'ake-gen-dialog',
  templateUrl: './gen-dialog.component.html',
  styleUrls: ['./gen-dialog.component.scss'],
})
export class GenDialogComponent {
  btnok: string = '';
  btncancel: string = '';
  content: string = '';
  dialogtitle: string = '';
  bgcolor: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.btnok = data.btnok;
    this.btncancel = data.btncancel;
    this.content = data.content;
    this.dialogtitle = data.dialogtitle;
    this.bgcolor = data.bgcolor;
  }
}
