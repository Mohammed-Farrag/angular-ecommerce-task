import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-filter',
  templateUrl: 'products-filter.component.html',
  styles: [
  ]
})
export class ProductsFilterComponent {

  @Output() onSortChanges = new EventEmitter<string>() 
  @Output() onLimitChanges = new EventEmitter<number>()

  sort = 'desc';
  itemShowCount = 12;
  @Output() onColsCountChange = new EventEmitter<number>();


  onSortMenu(newSort: string): void{
    this.sort = newSort;
    this.onSortChanges.emit(newSort);
  }
  
  onItemsUpdated(newCount: number): void{
    this.itemShowCount = newCount
    this.onLimitChanges.emit(newCount);
  }
  onColsUpdated(newColCount: number):void{
    this.onColsCountChange.emit(newColCount)
  }
}
