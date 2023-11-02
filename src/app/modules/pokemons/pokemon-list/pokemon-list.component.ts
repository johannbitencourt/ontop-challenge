import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin, map, mergeMap, tap } from 'rxjs';
import { PokeApiResult, Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  public pokemons: any;
  public isLoading: boolean = false;
  public currentPage: number = 1;
  public totalPages: number = 0;
  public limit: number = 40;

  private pokemonsSubscription: Subscription = new Subscription();

  constructor(
    private pokemonService: PokemonService,
  ) { }

  public ngOnInit(): void {
    this.getAllPokemons(this.currentPage);
  }

  public ngOnDestroy():void {
    this.pokemonsSubscription.unsubscribe();
  }

  public onPageChange(page: number) {
    this.currentPage = page;
    this.getAllPokemons(page);
  }

  private getAllPokemons(page: number) {
    this.isLoading = true;

    this.pokemonsSubscription.add(
      this.pokemonService.getProcessedPokemons(page, this.limit).pipe(
        tap(({ totalPages }) => this.totalPages = totalPages),
        map(({ results }) => results.map((result: PokeApiResult) => result.name)),
        mergeMap((names: string[]) => {
          const batchRequests = names.map((name: string) => this.pokemonService.getPokemon(name));
          return forkJoin(batchRequests);
        }),
        map((res) => this.pokemonService.pokemonListMapper(res))
      ).subscribe({
          next: (pokemons: Pokemon[]) => {
            this.pokemons = pokemons;
          },
          error: (error) => {
            console.error('Error fetching pokemons', error);
          },
          complete: () => this.isLoading = false,
        }
      )
    );
  }
}
