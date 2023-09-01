import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/products/product.model';

@Component({
  selector: 'app-profile',
  templateUrl:'profile.component.html',
  styles: [
  ]
})
export class ProfileComponent  {
  cartItems: Observable<Cart>

  constructor(private cartService: CartService){
    this.cartItems = this.cartService.cart.asObservable();
  }
  
}
