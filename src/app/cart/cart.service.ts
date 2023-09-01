import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../products/product.model';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new  BehaviorSubject<Cart>({items: []})

  constructor(private _snackBar: MatSnackBar) { }

  onAddToCart(item: CartItem) : void {
    const items = [...this.cart.value.items];

    const itemInCart  = items.find(_item => _item.id === item.id);

    if(itemInCart){
      itemInCart.quantity += 1; 
    }else{
      items.push(item);
    }

    this.cart.next({items})

    sessionStorage.setItem('cart',  JSON.stringify(this.cart.value.items ))

    this._snackBar.open('1 item added to cart ', 'OK', {duration: 3000})
    
  }


  getTotal(items: CartItem[]) : number {
    return items.map(item => item.price * item.quantity).reduce((acc, curr) => acc + curr , 0)
  }

  onClearCart() : void {
    this.cart.next({items: []});
  }

  onDeleteCartItem(item: CartItem): void{
    
    let cartItems = this.cart.value.items;
    cartItems = cartItems.filter( _item =>  _item.id !== item.id)
    
    this.cart.next({items:cartItems})
    sessionStorage.setItem('cart',  JSON.stringify(this.cart.value.items ))
    this._snackBar.open('1 item deleted from cart ', 'OK', {duration: 3000})
  }


  onQuantityIncreamented(item: CartItem):void {
    this.cart.value.items.map( _item => {
      if(_item.id === item.id)  _item.quantity += 1 
    })
    sessionStorage.setItem('cart',  JSON.stringify(this.cart.value.items ))
  }
  
  
  onQuantityDecreamented(item: CartItem): void{
    let itemsForRemoval: CartItem | undefined; 
    this.cart.value.items.map( _item => {
      if(_item.id === item.id){
          _item.quantity -= 1;
          if(_item.quantity == 0){
            itemsForRemoval = _item;
          }
        }
      })
    if(itemsForRemoval){
      this.onDeleteCartItem(itemsForRemoval);
      console.log(this.cart.value)
    }

    sessionStorage.setItem('cart',  JSON.stringify(this.cart.value.items ))
  }
}


