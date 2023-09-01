import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {


  constructor(private cartService: CartService, private http: HttpClient){}

  cart : Cart = { items: []};
  dataSource : CartItem[] = [];
  displayedCols: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]
  ngOnInit(): void {
    this.cartService.cart.subscribe(_cart => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }

  getTotal(items: CartItem[]) : number {
    return items.map(item => item.price * item.quantity).reduce((acc, curr) => acc + curr , 0)
  }
  onClearCart():void{
    this.cartService.onClearCart()
  }
  
  onDeleteCartItem(item: CartItem):void{
    this.cartService.onDeleteCartItem(item)
  }
  onQuantityIncreamented(item: CartItem) {
    this.cartService.onQuantityIncreamented(item)
  }
  onQuantityDecreamented(item: CartItem) {
    this.cartService.onQuantityDecreamented(item)
  }

  goToCheckout(): void {
    this.http.post('http://localhost:4242/checkout',
     
    {items: this.cart.items}
     
     ).subscribe(async (res: any) => {
  
      let stripe = await loadStripe('pk_test_51NZzqoI4vASs7sPD1knGdbEIKmlHHPWfgJKx2L3io7jbWf3VbzXPnGk1s3Rwu3YFAZcCLieK7Yns13zHQ8YzBPZW00DMIM8IBG')
    
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    })

    
  }
}
