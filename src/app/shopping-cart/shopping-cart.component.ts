import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ProductService } from '../shared/services/productsService.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  myProducts : Product[];
 @Input() allProducts : any ;
 
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.myProducts = this.productService.getMyProducts();
    // this.allProducts =this.productService.allProducts.emit(this.myProducts.slice());
  }

}
