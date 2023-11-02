import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { PokemonsRoutingModule } from './pokemons.routing.module';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';

@NgModule({
  declarations: [PokemonListComponent, PokemonViewComponent],
  imports: [CommonModule, SharedModule, PokemonsRoutingModule],
})
export class PokemonsModule { }
