import { Injectable } from '@angular/core';
import { Basket } from '../models/basket';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private basket: Basket = new Basket();

  constructor() { }

  addToCart(item: Item) {
    this.basket.addLineItem(item);
  }

  getLineItems() {
    return this.basket.LineItems;
  }

  getTotal() {
    return this.basket.TotalPrice;
  }

  clearCart() {

  }

  get ItemsCount() {
    return this.basket.TotalCount;
  }

}
