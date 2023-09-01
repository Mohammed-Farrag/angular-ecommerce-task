import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product.model';
import { MatSnackBar } from '@angular/material/snack-bar';
const BASE_URL = 'https://fakestoreapi.com';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }
  favourites: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([])
  products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([])

  getAllProducts(sort = 'desc', category?: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${BASE_URL}/products${(category) ? '/category/' + category : ''
      }?&sort=${sort}`)
  }

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${BASE_URL}/products/categories`)
  }

  getSingleProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${BASE_URL}/products/${id}`)
  }
  
  
  addToFav(product: Product): void {
    let fav = this.favourites.value.find(_product => _product.id == product.id);

    if (!fav) {
      product.isFav = true
      this.favourites.next([...this.favourites.value, product]);
      sessionStorage.setItem('favs', JSON.stringify(this.favourites.value))
      this.snackBar.open('1 item added to favs', 'Ok')
    } else {
      product.isFav = false
      let oldFavs = this.favourites.value.filter(_p => _p.id !== product.id);

      this.favourites.next(oldFavs)
      sessionStorage.setItem('favs', JSON.stringify(this.favourites.value))
      this.snackBar.open('1 item removed from favs', 'Ok')
    }

  }

  search(searchTerm: string): Observable<Product[]> {

    
    this.http.get<Product[]>(`${BASE_URL}/products`).subscribe((data: Product[]) => {
        let searchEdProducts = data.filter(p => p.title.toLowerCase().includes(searchTerm))
        this.products.next(searchEdProducts)

        console.log(this.products.value)
    }) 

   return this.products
  }

}
