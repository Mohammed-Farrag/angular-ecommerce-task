import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styles: [
  ]
})
export class LoginComponent {


  constructor(private authService: AuthService, private router: Router){}

  _loginForm: FormGroup = new FormGroup({
    name: new FormControl(null, [ Validators.required , Validators.minLength(8)]),
    password: new FormControl(null, [ Validators.required , Validators.minLength(8), Validators.maxLength(20)])
  })

  
  submit( ){
    this.authService.login(this._loginForm.value);
    this.router.navigate(['/'])
  }
}
