import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './cart/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { FiltersComponent } from './components/filters/filters.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    CartComponent,
    FiltersComponent,
    
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    FormsModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
