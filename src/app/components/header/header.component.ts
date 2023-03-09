import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LineItem } from 'src/app/models/lineItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  totalCount: Observable<number> = this.cartService.totalCount;

  constructor(
    private cartService: CartService ) {}
}
