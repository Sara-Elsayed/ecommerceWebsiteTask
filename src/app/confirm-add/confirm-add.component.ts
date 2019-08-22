import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material'

@Component({
  selector: 'app-confirm-add',
  templateUrl: './confirm-add.component.html',
  styleUrls: ['./confirm-add.component.css']
})
export class ConfirmAddComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmAddComponent>) { }

  ngOnInit() {
  }
  closeDialog(){
    this.dialogRef.close(false);
  }
}

