import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/interfaces';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  @Input() basket!: Product[];
  constructor() { }

  ngOnInit(): void {
  }

}
