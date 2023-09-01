import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { Product } from 'src/app/products/product.model';
import { CartService } from 'src/app/cart/cart.service';
import { DrawerService } from 'src/app/services/drawer.service';
import { ProductService } from 'src/app/products/product.service';
import { AuthService } from 'src/app/users/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styles: ['.example-spacer {flex: 1 1 auto;}']
})
export class HeaderComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private drawerService: DrawerService,
    public authService: AuthService,
    private ProductService: ProductService) { }

  
   searcValue : string = '';
  private _cart: Cart = { items: [] }
  itemsQuantity = 0;
  favs: Product[] = []
  @Input()
  get cart(): Cart {
    return this._cart
  }
  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsQuantity = cart.items.map(item => item.quantity).reduce((acc, cur) => acc + cur, 0);
  }

  isAuth: boolean = false
  ngOnInit(): void {
    this.authService.isAuth.subscribe((data:boolean) => this.isAuth = data )
    this.ProductService.favourites.subscribe(data => this.favs = data)

  }
  getTotal(items: CartItem[]) {
    return this.cartService.getTotal(items)
  }
  onClearCart(): void {
    this.cartService.onClearCart()
  }
  toggleDrawer() {
    this.drawerService.open.next(!this.drawerService.open.value)
  }

  
  logout(){
    this.authService.logout()
  }

  search(searchTerm: string){
    this.ProductService.search(searchTerm);
    this.searcValue = ''
  }
}
