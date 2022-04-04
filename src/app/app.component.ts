import { Component, OnInit } from '@angular/core';
import { ProductService } from './shared/product.service';
import { Product } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shoppingBasket';
  products!: Product[];
  basket!: Product[]
  
  constructor(private productService: ProductService) {}
  ngOnInit(){
    this.products = this.productService.getProducts();
    this.basket = this.productService.getBasketItems();
  }
}
