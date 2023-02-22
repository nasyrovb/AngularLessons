import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { LineItem } from '../models/lineItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private lineItems: LineItem[] = [];

  constructor() { }

  get TotalCount() {
    return this.lineItems.reduce((total, current) => total + current.quantity, 0);
  }

  get TotalPrice() {
      return this.lineItems.reduce((total, current) => total + current.TotalPrice, 0);
  }

  addLineItem(item: Item) {
    let lineItem = this.lineItems.find(lineItem => lineItem.id === item.id);          
    if( lineItem != null ) {
        lineItem.quantity = lineItem.quantity + 1;
    }
    else {
        this.lineItems.push(new LineItem(item));
    }
  } 

  clearCart() {
    this.lineItems = [];
    return this.lineItems;
  }

  get LineItems() {
    return this.lineItems;
  }

}
