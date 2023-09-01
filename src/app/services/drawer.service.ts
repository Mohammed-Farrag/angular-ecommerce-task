import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  constructor() { }

  open: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getDrawer(){
    return this.open
  }

}
