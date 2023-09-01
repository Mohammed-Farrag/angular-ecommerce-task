import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './cart/cart.service';
import { Subscription } from 'rxjs';
import { ProductService } from './products/product.service';
import { Product } from './products/product.model';
import { DrawerService } from './services/drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  cart: Cart = {items: []};
  category : string | undefined;
  limit: string = '12';
  sort: string = 'desc';
  productsSubscription !: Subscription;
  products : Product[] = []
  drawerToggle: boolean = false;
  constructor(
    private cartService: CartService, 
    private ProductService: ProductService,
    public drawerSer: DrawerService){}
  ngOnInit(): void {
    this.cartService.cart.subscribe(_cart => this.cart = _cart);
    this.drawerSer.open.subscribe(d => this.drawerToggle = d)
  }

  onShowCategoryChange(cat:string ): void {
    this.category = cat;
    this.getAllProducts(cat)
  }

  getAllProducts(cat: string){
    let favArr = this.ProductService.favourites.value;

    this.productsSubscription = this.ProductService.getAllProducts(this.sort, cat).subscribe(
      (_products) => {

     

        let prods = _products.map( _pro => {
            favArr.map(  _f => {
              if(_f.id == _pro.id ) { 
                _pro = { ..._pro, isFav: true}
                console.log(_pro)
              }
            })
            return _pro
        })
        
        this.ProductService.products.next(prods);
        this.products = prods
      })
    }
}
