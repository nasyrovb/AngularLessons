import { Component } from '@angular/core';
import { Item } from 'src/app/items/Item';
import { ItemsService } from 'src/app/items/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items: Item[] = [];
  
  constructor( private itemService: ItemsService ) {}

  ngOnInit() : void {
    this.itemService
      .getItems()
      .subscribe((result: Item[]) => (this.items = result));
  }

}