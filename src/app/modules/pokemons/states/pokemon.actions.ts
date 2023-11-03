import { createAction, props } from '@ngrx/store';
import { Evolution, Pokemon } from 'src/app/models/pokemon';

export const loadPokemons = createAction('[pokemon] load pokemons',
  props<{ page: number, limit: number }>()
);

export const setTotalPages = createAction(
  '[pokemon] set total pages',
  props<{ totalPages: number }>()
);

export const loadPokemonsSuccess = createAction(
  '[pokemon] load pokemons success',
  props<{ pokemons: Pokemon[] }>()
);

export const loadPokemonView = createAction(
  '[pokemon] load pokemon view',
  props<{ name: string }>()
);

export const loadPokemonViewSuccess = createAction(
  '[pokemon] load pokemon view success',
  props<{ pokemon: Pokemon, evolutions: Evolution[] }>()
);

export const loadFailure = createAction(
  '[pokemon] load pokemons failure',
  props<{ error: any }>()
);
