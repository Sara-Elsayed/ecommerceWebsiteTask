import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/productsService.service';
import { Product } from '../model/product.model';
import { DialogService } from '../shared/services/dialog.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(
    private productService : ProductService,
    private dialogService: DialogService) { }
  
  productsList : Product[];
 
  ngOnInit() {
    this.productService.getProducts()
    .subscribe( data => {
      this.productsList = data;
    })
  }
  onClick(product : Product){
    this.dialogService.openConfirmationDialog()
    .afterClosed()
    .subscribe(res=>{
      if(res){
        this.productService.addProduct(product)
      }
    })
  }
}
