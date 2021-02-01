import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductItemPageComponent } from './product-item-page/product-item-page.component';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';

const routes: Routes =  [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: MainContentComponent },
      {path: 'catalog', component: CatalogPageComponent},
      {path: 'item/:id', component: ProductItemPageComponent},
      {path: 'cart', component: CartPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule{}
