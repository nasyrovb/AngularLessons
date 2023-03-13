import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})
export class CartTotalComponent {
  cartTotal: Observable<number> = this.cartService.getTotalPriceChanges();

  constructor(
    private cartService: CartService,
    ) {
  }
}
