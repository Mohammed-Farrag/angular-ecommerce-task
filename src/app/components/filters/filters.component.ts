import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
  styles: [
  ]
})
export class FiltersComponent {


  constructor(private productService: ProductService){}

  categoriesSubscription !: Subscription;
  categories : string[] = []
  @Output() onShowCategoryChange = new EventEmitter<string>()


  ngOnInit() {
   this.categoriesSubscription = this.productService.getAllCategories().subscribe((categories) =>{
      this.categories = categories;
   })
  }

  ngOnDestroy(): void {
    if(this.categoriesSubscription){
      this.categoriesSubscription.unsubscribe()
    }
    
  }
  onShowCategory(cat: string):void {
      this.onShowCategoryChange.emit(cat)
  }

}
