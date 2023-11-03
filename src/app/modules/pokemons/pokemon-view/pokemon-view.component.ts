import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Evolution, Pokemon } from 'src/app/models/pokemon';
import { selectCurrentPokemon, selectEvolutions, selectPokemonError, selectPokemonLoading } from '../states/pokemon.selectors';
import { loadPokemonView } from '../states/pokemon.actions';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent implements OnInit {

  public pokemon$: Observable<Pokemon> = new Observable();
  public evolutions$: Observable<Evolution[]> = new Observable();
  public loading$: Observable<boolean> = new Observable();
  public error$: Observable<any> = new Observable();

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
