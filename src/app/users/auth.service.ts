import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  constructor() { }


  login(data: any) {
    this.isAuth.next(true);
    let authData = localStorage.getItem('authData');

    if(!authData){
      localStorage.setItem('authData', JSON.stringify(data));
    }
    
  }

  logout(){
    this.isAuth.next(false);
    localStorage.removeItem('authData');
    sessionStorage.clear()
  }
}
