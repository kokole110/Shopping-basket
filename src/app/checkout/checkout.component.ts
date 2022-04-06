import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/interfaces';
import { ProductService } from '../shared/product.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  basket!: Product[];
  isPaid: boolean = false;
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.basket = this.productService.getBasket();
  }

  onSubmit(){
    this.isPaid = true;
  }

  onReset() {
    this.isPaid = false;
    this.productService.resetBasket();
    this.basket = this.productService.getBasket();
  }

}
