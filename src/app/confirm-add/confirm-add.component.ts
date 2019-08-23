import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material'
import { Product } from '../model/product.model';

@Component({
  selector: 'app-confirm-add',
  templateUrl: './confirm-add.component.html',
  styleUrls: ['./confirm-add.component.css']
})
export class ConfirmAddComponent implements OnInit {

  product:Product;
  constructor(
    public dialogRef: MatDialogRef<ConfirmAddComponent>) { }

  ngOnInit() {
    this.product = this.dialogRef.componentInstance.product
  }
  closeDialog(){
    this.dialogRef.close(false);
    console.log(this.product);
    
  }
}

