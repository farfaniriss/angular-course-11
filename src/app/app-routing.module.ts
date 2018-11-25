import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from '../app/components/heroes/heroes.component';
import { HeroeEditComponent } from '../app/components/heroes/heroe-edit.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeEditComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' },
  { path: '', pathMatch: 'full', redirectTo: 'heroes' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
