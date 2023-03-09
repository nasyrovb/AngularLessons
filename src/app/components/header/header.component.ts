import { Component } from '@angular/core';
import { LineItem } from 'src/app/models/lineItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartTotalCount: number = 0;

  constructor(
    private cartService: CartService ) {}
   
    ngOnInit() : void {
      this.cartService
        .totalCount
        .subscribe((result: number) => this.cartTotalCount = result);
    }

}
