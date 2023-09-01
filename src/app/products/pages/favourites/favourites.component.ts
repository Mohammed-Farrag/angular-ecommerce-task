import { CartService } from 'src/app/cart/cart.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/products/product.model';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-favourites',
  templateUrl: 'favourites.component.html',
  styles: [
  ]
})
export class FavouritesComponent {
  constructor(private ProductService: ProductService , private cartService: CartService){
    this.ProductService.favourites.subscribe(_favs => this.favs = _favs)
  }
  favs: Product[] = []

  onAddToCartChange(product: Product): void {
    this.cartService.onAddToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
