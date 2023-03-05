import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from '../components/cart/cart.component';
import { CartItemComponent } from '../components/cart-item/cart-item.component';
import { CartTotalComponent } from '../components/cart-total/cart-total.component';

@NgModule({
  declarations: [CartComponent, CartItemComponent, CartTotalComponent],
  imports: [CommonModule, CartRoutingModule],
  exports: [CartComponent, CartItemComponent, CartTotalComponent],
})
export class CartModule {}