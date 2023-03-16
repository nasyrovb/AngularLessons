import { Component, Input } from '@angular/core';
import { LineItem } from 'src/app/cart/lineItem.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() lineItem!: LineItem;

  constructor(private cartService: CartService) {}

  deleteLineItem(lineItem: LineItem) {
    this.cartService.deleteLineItem(lineItem);
  }


}

