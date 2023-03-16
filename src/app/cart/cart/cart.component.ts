import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LineItem } from 'src/app/cart/lineItem.model';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  lineItems: Observable<LineItem[]> = this.cartService.lineItems;

  constructor(private cartService: CartService) {}

} 