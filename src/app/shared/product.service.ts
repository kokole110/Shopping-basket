import { Injectable } from '@angular/core';
import { Product } from './interfaces';
import { CategoryType } from './enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'book',
      category: CategoryType.Books,
      imported: false,
      price: 12.49,
    },
    {
      id: 2,
      name: 'music CD',
      category: CategoryType.Others,
      imported: false,
      price: 14.99,
    },
    {
      id: 3,
      name: 'chocolate bar',
      category: CategoryType.Food,
      imported: false,
      price: 0.85,
    },
    {
      id: 4,
      name: 'box of chocolates',
      category: CategoryType.Food,
      imported: true,
      price: 10.00,
    },
    {
      id: 5,
      name: 'bottle of perfume',
      category: CategoryType.Others,
      imported: true,
      price: 47.50,
    },
    {
      id: 6,
      name: 'bottle of perfume',
      category: CategoryType.Others,
      imported: true,
      price: 27.99,
    },
    {
      id: 7,
      name: 'bottle of perfume',
      category: CategoryType.Others,
      imported: false,
      price: 18.99,
    },
    {
      id: 8,
      name: 'headache pills',
      category: CategoryType.MedicalProd,
      imported: false,
      price: 9.75,
    },
    {
      id: 9,
      name: 'chocolates',
      category: CategoryType.Food,
      imported: true,
      price: 11.25,
    },
  ];

  private basket: Product[] = [];

  constructor() { }

  getProducts() {
    return this.products.slice();
  }

  getBasketItems() {
    return this.basket;
  }

  addToBasket(product: Product) {
    this.basket.push(product);
  }
}
