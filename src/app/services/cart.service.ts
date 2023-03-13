import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable, of } from 'rxjs';
import { Item } from '../models/Item';
import { LineItem } from '../models/lineItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _lineItems: BehaviorSubject<LineItem[]> = new BehaviorSubject([] as LineItem[]);

  public readonly lineItems: Observable<LineItem[]> = this._lineItems.asObservable();  

  public getTotalCountChanges(): Observable<number>{
    return this._lineItems.pipe(map(l_items => l_items.reduce((total, current) => total + current.quantity, 0)))
  }

  public getTotalPriceChanges(): Observable<number> {
    return this._lineItems.pipe(map(l_items => l_items.reduce((total, current) => total + current.quantity * current.price!, 0)))
  }

  addLineItem(item: Item) {
    let currentLineItems = this._lineItems.getValue();
    let lineItem = currentLineItems.find(lineItem => lineItem.id === item.id);          
    if( lineItem != null ) {
        lineItem.quantity = lineItem.quantity + 1;        
    }
    else {
        currentLineItems.push( { id: item.id, title: item.title, price: item.price, quantity: 1} );      
    }
    this._lineItems.next(currentLineItems);
  } 

}
