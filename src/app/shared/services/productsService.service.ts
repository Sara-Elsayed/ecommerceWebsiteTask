import { Injectable, Input, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Product } from '../../model/product.model';

@Injectable()
export class ProductService
{
   private myProducts : Product[] = [
   ];
   constructor(private httpclient : HttpClient) {
      }
     getProducts(): Observable<any>{
        return this.httpclient.get("https://my-json-server.typicode.com/AhmedMagdy1/ecommerce/products")
     }
     
     addProduct( product : Product){
      this.myProducts.push(product);
      console.log(this.myProducts)
  }
      getMyProducts(){
         return this.myProducts.slice();
  }
}