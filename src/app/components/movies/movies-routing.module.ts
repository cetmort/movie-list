import { NgModule } from '@angular/core';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { HorrorComponent } from './horror/horror.component';
import { HomeComponent } from './home/home.component';

const routes: Routes =[
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'horror',
        component: HorrorComponent
      }
    ]
  }
] 

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class MoviesRoutingModule { }
