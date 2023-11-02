import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutes } from 'src/app/models/app-routes.model';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';


const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent
  },
  {
    path: `${AppRoutes.Pokemon}/:name`,
    component: PokemonViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
