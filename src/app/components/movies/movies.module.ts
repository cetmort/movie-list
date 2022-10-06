import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorrorComponent } from './horror/horror.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HorrorComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
