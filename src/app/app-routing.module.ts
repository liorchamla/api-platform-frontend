import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

const routes: Routes = [
  {path: '', component: HeroesListComponent},
  {path: ':id', component: HeroDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
