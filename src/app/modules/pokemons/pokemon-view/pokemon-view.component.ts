import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Evolution, Pokemon } from 'src/app/models/pokemon';
import { selectCurrentPokemon, selectEvolutions, selectPokemonError, selectPokemonLoading } from '../states/pokemon.selectors';
import { loadPokemonView } from '../states/pokemon.actions';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent implements OnInit, OnDestroy {

  public pokemon$: Observable<Pokemon> = new Observable();
  public evolutions$: Observable<Evolution[]> = new Observable();
  public loading$: Observable<boolean> = new Observable();
  public error$: Observable<unknown> = new Observable();

  public error: unknown;
  private readonly errorSubscription = new Subscription();

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {

    this.pokemon$ = this.store.select(selectCurrentPokemon);
    this.evolutions$ = this.store.select(selectEvolutions);
    this.loading$ = this.store.select(selectPokemonLoading);
    this.error$ = this.store.select(selectPokemonError);
  }

  public ngOnInit(): void {
    this.scrollToTop();

    if (this.route && this.route.paramMap) {
      this.route.paramMap.subscribe((params) => {
        const pokemonName = params.get('name') as string;
        this.store.dispatch(loadPokemonView({ name: pokemonName }));
      });
    }

    this.errorSubscription.add(
      this.error$.subscribe((error) => this.error = error)
    );
  }

  public ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }

  private scrollToTop(): void {
    if (this.router && this.router.events) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd && window) {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      });
    }
  }
}
