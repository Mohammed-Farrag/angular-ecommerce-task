import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { ProductsFilterComponent } from './pages/products-filter/products-filter.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ProductBoxComponent } from './pages/product-box/product-box.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorIntercept } from './error.intercept';
import { ProductService } from './product.service';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: ':id', component: SingleProductComponent},
]


@NgModule({
  declarations: [
    ProductListComponent,
    SingleProductComponent,
    ProductsFilterComponent,
    ProductBoxComponent,
    FavouritesComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule.forChild(routes),
    AngularMaterialModule,
    HttpClientModule,

  ],
  providers: [ProductService, {provide: HTTP_INTERCEPTORS, useClass: ErrorIntercept , multi: true }]
})
export class ProductsModule { }
