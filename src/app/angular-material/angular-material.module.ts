import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import  { MatMenuModule } from '@angular/material/menu';
import  { MatButtonModule } from '@angular/material/button';
import  { MatCardModule } from '@angular/material/card';
import  { MatIconModule } from '@angular/material/icon';
import  { MatExpansionModule } from '@angular/material/expansion';
import  { MatListModule } from '@angular/material/list';
import  { MatToolbarModule } from '@angular/material/toolbar';
import  { MatBadgeModule } from '@angular/material/badge';
import  { MatTableModule } from '@angular/material/table';
import  { MatProgressBarModule } from '@angular/material/progress-bar';
import  { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatBadgeModule,
    MatTableModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatTooltipModule
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatBadgeModule,
    MatTableModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatTooltipModule
  ]
})
export class AngularMaterialModule { }
