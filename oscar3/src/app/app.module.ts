import { NavigateComponent } from './layout/header/navigate/navigate.component';
import { SearchBlockComponent } from './layout/header/search-block/search-block.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragScrollModule } from 'ngx-drag-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BasketComponent } from './layout/header/basket/basket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { SelectLanguageComponent } from './layout/header/select-language/select-language.component';
import { AdvantagesComponent } from './layout/header/advantages/advantages.component';
import { AdvertisingComponent } from './layout/main-content/advertising/advertising.component';
import { LayoutComponent } from './layout/layout.component';
import { CatalogComponent } from './layout/main-content/catalog/catalog.component';
import { BrandsComponent } from './layout/main-content/brands/brands.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { NewsComponent } from './layout/main-content/news/news.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { FiltersComponent } from './catalog-page/filters/filters.component';
import { RecommendationComponent } from './layout/main-content/catalog/recommendation/recommendation.component';
import { ProductItemComponent } from './catalog-page/product-item/product-item.component';
import { ProductItemPageComponent } from './product-item-page/product-item-page.component';
import { CollageComponent } from './product-item-page/components/collage/collage.component';
import { DescriptionComponent } from './product-item-page/description/description.component';
import { DetailsComponent } from './product-item-page/details/details.component';
import { PhotoProductComponent } from './product-item-page/photo-product/photo-product.component';
import { ReviewsComponent } from './product-item-page/reviews/reviews.component';
import { CartPageComponent } from './cart-page/cart-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasketComponent,
    SelectLanguageComponent,
    SearchBlockComponent,
    NavigateComponent,
    AdvantagesComponent,
    AdvertisingComponent,
    LayoutComponent,
    CatalogComponent,
    NewsComponent,
    BrandsComponent,
    FooterComponent,
    MainContentComponent,
    CatalogPageComponent,
    FiltersComponent,
    RecommendationComponent,
    ProductItemComponent,
    ProductItemPageComponent,
    CollageComponent,
    DescriptionComponent,
    DetailsComponent,
    PhotoProductComponent,
    ReviewsComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    DragScrollModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
