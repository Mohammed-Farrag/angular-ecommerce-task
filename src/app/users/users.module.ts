import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuardGuard } from './auth-guard.guard';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent, canActivate: [authGuardGuard]},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class UsersModule { }
