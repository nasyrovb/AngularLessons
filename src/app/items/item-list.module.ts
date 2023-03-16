import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemListRoutingModule } from './item-list.routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from '../cart/state/cart.reducer';

@NgModule({
  declarations: [ItemListComponent, ItemComponent],
  imports: [
    CommonModule, 
    ItemListRoutingModule,
    StoreModule.forFeature("cart", cartReducer)
  ],
  exports: [ItemListComponent, ItemComponent],
})
export class ItemListModule {} 