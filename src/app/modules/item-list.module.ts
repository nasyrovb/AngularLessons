
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemListRoutingModule } from './item-list.routing.module';
import { ItemListComponent } from '../components/item-list/item-list.component';
import { ItemComponent } from '../components/item/item.component';

@NgModule({
  declarations: [ItemListComponent, ItemComponent],
  imports: [CommonModule, ItemListRoutingModule],
  exports: [ItemListComponent, ItemComponent],
})
export class ItemListModule {}