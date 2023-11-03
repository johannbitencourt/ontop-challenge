import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonState } from './pokemon.reducers';

export const selectPokemonState = createFeatureSelector<PokemonState>('pokemon');

export const selectPokemons = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.pokemons
);

export const selectTotalPages = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.totalPages
);

export const selectPokemonLoading = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.loading
);

export const selectPokemonError = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.error
);

export const selectCurrentPokemon = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.currentPokemon
);

export const selectEvolutions = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.evolutions
);
