import { Component } from '@angular/core';
import { Product } from '../../product.model';
import { CartService } from 'src/app/cart/cart.service';
import { ProductService } from 'src/app/products/product.service';
import { DrawerService } from 'src/app/services/drawer.service';
import {  Subscription } from 'rxjs';
const ROWS_HEIGHT: {[id: number] : number} = {1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls:['product-list.component.scss']
})
export class ProductListComponent {

  constructor(
    private cartService: CartService, 
    private ProductService: ProductService, 
    private drawerSer: DrawerService){
    }

    p:number = 1
  cols: number = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category : string | undefined;
  products : Product[] = []
  limit: string = '12';
  sort: string = 'desc';
  productsSubscription !: Subscription;
  drawerToggle :boolean = false;

  ngOnInit(): void {
    this.getAllProducts();
    this.drawerSer.open.subscribe(d => this.drawerToggle = d)
    this.ProductService.products.subscribe(data => this.products = data)
  }

  getAllProducts(){
    let favArr = this.ProductService.favourites.value;
    this.productsSubscription = this.ProductService.getAllProducts(this.sort, this.category).subscribe(
      (_products) => {

        // check if the single product is favourite or not
        let prods:Product[] = _products.map( _pro => {
            favArr.map(  _f => {
              if(_f.id == _pro.id ) { _pro.isFav = true}
            })
            return _pro
        })
        this.products = prods
      })
  }

  ngOnDestroy(): void {
    if(this.productsSubscription){
      this.productsSubscription.unsubscribe()
    }
  }
  onColsCountChange(newColCount: number): void{
    this.cols = newColCount;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(cat:string ): void {
    this.category = cat;
    this.getAllProducts()
  }
  onAddToCartChange(product: Product): void {
    this.cartService.onAddToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }

  onSortChanges(newSort: string): void{
    this.sort = newSort;
    this.getAllProducts()
  }
  
  onLimitChanges(newLimit: number): void{
    this.limit = newLimit.toString();
    this.getAllProducts()
  }
}
