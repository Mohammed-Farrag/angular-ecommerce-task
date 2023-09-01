import { Component } from '@angular/core';
import { Product } from '../../product.model';
import { ProductService } from 'src/app/products/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl:'single-product.component.html',
  styles: [
  ]
})
export class SingleProductComponent {

  constructor(private route: ActivatedRoute, private productService: ProductService){}
  product : Product = {} as Product 
  ngOnInit(){
    let id = this.route.snapshot.paramMap.get('id') || '';
    this.productService.getSingleProduct(+id).subscribe(_product => this.product = _product);
  }
}
