import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../shared/shared.module';
import { PokemonsRoutingModule } from './pokemons.routing.module';

import { pokemonReducer } from './states/pokemon.reducers';
import { PokemonEffects } from './states/pokemon.effects';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';




@NgModule({
  declarations: [PokemonListComponent, PokemonViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    PokemonsRoutingModule,
    StoreModule.forFeature('pokemon', pokemonReducer),
    EffectsModule.forFeature([PokemonEffects]),
  ],
})
export class PokemonsModule { }
