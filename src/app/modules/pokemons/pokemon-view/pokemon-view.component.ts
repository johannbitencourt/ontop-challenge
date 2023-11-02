import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent implements OnInit {

  public pokemon: any;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly pokemonService: PokemonService,
  ) { }

  public ngOnInit(): void {

    if (this.route && this.route.paramMap) {
      this.route.paramMap.subscribe((params) => {
        const pokemonName = params.get('name') as string;
        this.getPokemon(pokemonName);
      });
    }
  }

  private getPokemon(name: string) {
    this.pokemonService.getPokemon(name).subscribe((pokemon) => {
      this.pokemon = pokemon;
    });
  }
}
