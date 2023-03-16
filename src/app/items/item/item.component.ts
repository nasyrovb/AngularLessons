import { Component, Input } from '@angular/core';
import { Item } from 'src/app/items/Item';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item!: Item;

  constructor(private cartService: CartService) {}

  addItem(item: Item) {
    this.cartService.addLineItem(item);
  }

}