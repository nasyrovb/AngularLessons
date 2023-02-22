import { Injectable } from '@angular/core';
import { Basket } from '../models/basket';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Item[] = [];
  private basket: Basket = new Basket();

  constructor() { }

  addToCart(item: Item) {
    this.basket.addLineItem(item);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getItemsCount() {
    return this.basket.totalCount;
  }

}
