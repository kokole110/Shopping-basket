import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/interfaces';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }
  @Input() product!: Product;

  ngOnInit(): void {
  }

  onAddItem() {
    this.productService.addToBasket(this.product)
  }

}
