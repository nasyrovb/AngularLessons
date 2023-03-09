import { Component } from '@angular/core';
import { LineItem } from 'src/app/models/lineItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  lineItems: LineItem[] = [];
  cartTotal: number = 0;

  constructor(
    private cartService: CartService,
    ) {}

    ngOnInit() : void {
      this.cartService
        .lineItems
        .subscribe((result: LineItem[]) => this.lineItems = result);

      this.cartService
        .totalPrice
        .subscribe((result: number) => this.cartTotal = result);
    }


}