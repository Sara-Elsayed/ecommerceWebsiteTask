import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/productsService.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  myProducts : Product[]
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getMyProducts()
  }

}
