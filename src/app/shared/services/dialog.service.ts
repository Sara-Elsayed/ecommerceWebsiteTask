import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material";
import { ConfirmAddComponent } from '../../confirm-add/confirm-add.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private  dialog: MatDialog) { }

  openConfirmationDialog(){
    return this.dialog.open(ConfirmAddComponent,{
      width: '390px',
      panelClass:'confirm-dialog-container',
      disableClose: true
    });
  }
}
