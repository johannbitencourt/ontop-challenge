import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, combineLatest } from 'rxjs';
import { Evolution, Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent implements OnInit, OnDestroy, AfterViewInit {

  public pokemon: Pokemon = {} as Pokemon;
  public evolutions: Evolution[] = [];
  public isLoading: boolean = false;

  private pokemonsSubscription: Subscription = new Subscription();


  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly pokemonService: PokemonService,
  ) { }


  public ngAfterViewInit(): void {
    this.scrollToTop();
  }

  public ngOnInit(): void {
    this.scrollToTop();

    if (this.route && this.route.paramMap) {
      this.route.paramMap.subscribe((params) => {
        const pokemonName = params.get('name') as string;
        this.getPokemon(pokemonName);
      });
    }
  }

  public ngOnDestroy(): void {
    this.pokemonsSubscription.unsubscribe();
  }

  private scrollToTop(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  }

  private getPokemon(name: string) {
    this.isLoading = true;

    this.pokemonsSubscription.add(
      combineLatest([
        this.pokemonService.getPokemon(name),
        this.pokemonService.getPokemonSpecies(name)
      ]).subscribe({
        next: ([pokemon, evolutions]) => {
          this.pokemon = pokemon;
          this.evolutions = evolutions;
        },
        complete: () => this.isLoading = false,
      })
    );
  }
}
