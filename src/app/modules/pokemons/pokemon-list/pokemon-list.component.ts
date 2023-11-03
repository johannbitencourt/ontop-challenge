import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { selectPokemonError, selectPokemonLoading, selectPokemons, selectTotalPages } from '../states/pokemon.selectors';
import { loadPokemons } from '../states/pokemon.actions';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  public pokemons$: Observable<Pokemon[]> = new Observable();
  public totalPages$: Observable<number> = new Observable();
  public loading$: Observable<boolean> = new Observable();
  public error$: Observable<unknown> = new Observable();

  public page = 1;
  public limit = 40;
  public error: unknown;

  private readonly errorSubscription = new Subscription();
  private readonly pokemonsSubscription: Subscription = new Subscription();

  constructor(
    private store: Store,
  ) {
    this.pokemons$ = this.store.select(selectPokemons);
    this.totalPages$ = this.store.select(selectTotalPages);
    this.loading$ = this.store.select(selectPokemonLoading);
    this.error$ = this.store.select(selectPokemonError);
  }

  public ngOnInit(): void {
    this.pokemonsSubscription.add(
      this.totalPages$.subscribe(() => {
        this.getAllPokemons(this.page, this.limit);
      })
    );

    this.errorSubscription.add(
      this.error$.subscribe((error) => this.error = error)
    );
  }

  public ngOnDestroy():void {
    this.pokemonsSubscription.unsubscribe();
  }

  public onPageChange(page: number) {
    this.page = page;
    this.getAllPokemons(this.page, this.limit);
  }

  private getAllPokemons(page: number, limit: number) {
    this.store.dispatch(loadPokemons({ page, limit }))
  }
}
