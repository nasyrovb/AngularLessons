import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LineItem } from 'src/app/models/lineItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  lineItems: Observable<LineItem[]> = this.cartService.lineItems;

  constructor(
    private cartService: CartService,
    ) {}
}