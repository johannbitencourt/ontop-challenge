import { createReducer, on } from '@ngrx/store';
import * as PokemonActions from './pokemon.actions';
import { Evolution, Pokemon } from 'src/app/models/pokemon';


export interface PokemonState {
  pokemons: Pokemon[];
  totalPages: number;
  currentPokemon: Pokemon;
  evolutions: Evolution[];
  loading: boolean;
  error: unknown;
}

export const initialState: PokemonState = {
  pokemons: [],
  totalPages: 0,
  currentPokemon: {} as Pokemon,
  evolutions: [],
  loading: false,
  error: null,
};

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.loadPokemons, (state) => ({
    ...state,
    loading: true,
  })),

  on(PokemonActions.setTotalPages, (state, { totalPages }) => ({
    ...state,
    totalPages,
  })),

  on(PokemonActions.loadPokemonsSuccess, (state, { pokemons }) => ({
    ...state,
    pokemons,
    loading: false,
    error: null,
  })),

  on(PokemonActions.loadPokemonView, (state) => ({
    ...state,
    loading: true,
  })),

  on(PokemonActions.loadPokemonViewSuccess, (state, { pokemon, evolutions }) => ({
    ...state,
    currentPokemon: pokemon,
    evolutions: evolutions,
    loading: false,
    error: null,
  })),

  on(PokemonActions.loadFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
