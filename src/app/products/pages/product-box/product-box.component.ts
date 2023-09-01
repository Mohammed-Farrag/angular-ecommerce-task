import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/products/product.model';
import { CartService } from 'src/app/cart/cart.service';
import { ProductService } from 'src/app/products/product.service';
import { AuthService } from 'src/app/users/auth.service';

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html',
  styles: [
  ]
})
export class ProductBoxComponent implements OnInit {

  @Input() fullWidthMode = false;

  @Output() onAddToCartChange = new EventEmitter<Product>();

  @Input() product !: Product
  isFav: boolean = false
  isAuth !: boolean;
  constructor(public ProductService: ProductService, private authService: AuthService) {
    this.authService.isAuth.subscribe((data:boolean) => this.isAuth = data)
   }





  onAddToCart(): void {
    this.onAddToCartChange.emit(this.product)
  }

  ngOnInit(): void {

  }
  onAddToFav(product: Product) {

    this.ProductService.addToFav(product);
    this.isFav = !this.isFav
  }
}
