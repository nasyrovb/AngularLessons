import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Item } from '../items/Item';
import { LineItem } from './lineItem.model';
import * as fromCart from "../cart/state/cart.reducer"
import * as cartActions from "../cart/state/cart.actions"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private store: Store<fromCart.AppState>){ }

  public readonly lineItems: Observable<LineItem[]> = this.store.pipe(select(fromCart.getCart));  

   public getTotalCountChanges() : Observable<number> {
     return this.store.pipe(select(fromCart.getTotalCount));
   }

  public getTotalPriceChanges(): Observable<number> {
    return this.store.pipe(select(fromCart.getTotalPrice));
  }

  addLineItem(item: Item) {
    this.store.dispatch(new cartActions.AddItem( { id: item.id, title: item.title, price: item.price, quantity: 1} ));      
  } 
 
  deleteLineItem(lineItem: LineItem) {
    this.store.dispatch(new cartActions.DeleteItem(lineItem.id));      
  }   
}
