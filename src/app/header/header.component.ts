import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  totalCount: Observable<number> = this.cartService.getTotalCountChanges();

  constructor( private cartService: CartService ) {}
}
