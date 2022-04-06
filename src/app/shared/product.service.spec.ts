import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { CategoryType } from './enum';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getPriceWithTaxes()', () => {
    it('should return price with taxes', () => {
      const book = {
        id: 1,
        name: 'book',
        category: CategoryType.Books,
        imported: false,
        price: 12.49,
      }
      const food = {
        id: 3,
        name: 'chocolate bar',
        category: CategoryType.Food,
        imported: false,
        price: 0.85,
      }
      const importedPerfume = {
        id: 5,
        name: 'bottle of perfume',
        category: CategoryType.Others,
        imported: true,
        price: 47.50,
      }
      expect(service.getPriceWithTaxes(book)).toBe(12.49);
      expect(service.getPriceWithTaxes(food)).toBe(0.85);
      expect(service.getPriceWithTaxes(importedPerfume)).toBe(54.65);
    });
  });

  describe('#getTotalPrice(), #getSalesTaxes', () => {
    const basket1 = [
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
    ];
    const basket2 = [
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
    ];
    const basket3 = [
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
    ]
    it('should return total price', () => {
      expect(service.getTotalPrice(basket1)).toBe(29.83);
      expect(service.getTotalPrice(basket2)).toBe(65.15);
      expect(service.getTotalPrice(basket3)).toBe(74.68);
    });
    it('should return sales taxes', () => {
      expect(service.getSalesTaxes(basket1)).toBe(1.50);
      expect(service.getSalesTaxes(basket2)).toBe(7.65);
      expect(service.getSalesTaxes(basket3)).toBe(6.70);
    });
  })
});
