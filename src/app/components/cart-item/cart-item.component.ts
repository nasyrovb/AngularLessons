import { Component, Input } from '@angular/core';
import { LineItem } from 'src/app/models/lineItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() lineItem!: LineItem;
}
