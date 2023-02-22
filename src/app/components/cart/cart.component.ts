import { Component } from '@angular/core';
import { LineItem } from 'src/app/models/lineItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  lineItems: LineItem[] = this.cartService.getLineItems();

  constructor(
    private cartService: CartService,
    ) {}

  ngOnInit() : void {
    // this.itemService
    //   .getItems()
    //   .subscribe((result: Item[]) => (this.items = result));
  }


}