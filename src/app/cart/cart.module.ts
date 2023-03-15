import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartTotalComponent } from './cart-total/cart-total.component';

@NgModule({
  declarations: [
    CartComponent, 
    CartItemComponent, 
    CartTotalComponent
  ],
  imports: [
    CommonModule, 
    CartRoutingModule,
  ],
  exports: [CartComponent, CartItemComponent, CartTotalComponent],
})
export class CartModule {}