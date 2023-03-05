import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cart',
    loadChildren: () =>
      import('./modules/cart.module').then(
        (m) => m.CartModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/item-list.module').then(
        (m) => m.ItemListModule
      ),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
