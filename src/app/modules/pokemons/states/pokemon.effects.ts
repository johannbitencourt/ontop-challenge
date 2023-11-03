import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, combineLatest, forkJoin, map, mergeMap, of, switchMap, tap } from 'rxjs';
import * as PokemonActions from './pokemon.actions';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokeApiResult } from 'src/app/models/pokemon';


@Injectable()
export class PokemonEffects {

  constructor(
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly pokemonService: PokemonService,
  ) { }

  loadPokemons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActions.loadPokemons),
      switchMap((action) =>
        this.pokemonService.getProcessedPokemons(action.page, action.limit).pipe(
          tap(({ totalPages }) => this.store.dispatch(PokemonActions.setTotalPages({ totalPages }))),
          map(({ results }) => results.map((result: PokeApiResult) => result.name)),
          mergeMap((names: string[]) => {
            const batchRequests = names.map((name: string) => this.pokemonService.getPokemon(name));
            return forkJoin(batchRequests).pipe(
              map((pokemons) => PokemonActions.loadPokemonsSuccess({ pokemons })),
              catchError((error) => of(PokemonActions.loadFailure({ error })))
            );
          }),
        ),
      ),
    ),
  );

  loadPokemonView$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActions.loadPokemonView),
      mergeMap(({ name }) =>
        combineLatest([
          this.pokemonService.getPokemon(name),
          this.pokemonService.getPokemonSpecies(name)
        ]).pipe(
          map(([pokemon, evolutions]) => PokemonActions.loadPokemonViewSuccess({ pokemon: pokemon, evolutions: evolutions })),
          catchError((error) => of(PokemonActions.loadFailure({ error })))
        )
      )
    )
  );
}
