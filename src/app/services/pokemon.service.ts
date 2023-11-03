import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map, switchMap } from 'rxjs';
import { Pokemon, PokemonsResponse, Stats } from '../models/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly url = 'https://pokeapi.co/api/v2';

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getPokemons(page: number, limit: number): Observable<PokemonsResponse> {
    const offset = (page - 1) * limit;
    return this.http.get<PokemonsResponse>(`${this.url}/pokemon?offset=${offset}&limit=${limit}`);
  }

  public getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}/pokemon/${name}`).pipe(
      map((pokemon: Pokemon) => this.pokemonMapper(pokemon)),
    );
  }

  public getProcessedPokemons(page: number, limit: number): Observable<PokemonsResponse> {
    return this.getPokemons(page, limit).pipe(
      map((res) => {
        const totalPages = Math.ceil(res.count / limit);
        return {
          ...res,
          totalPages: totalPages
        };
      }),
    );
  }

  public getPokemonSpecies(name: string): Observable<any> {
    return this.http.get(`${this.url}/pokemon-species/${name}`).pipe(
      switchMap((res: any) => {
        const chainId = res.evolution_chain.url.split('/').filter(Boolean).pop();
        return this.getPokemonEvolutions(chainId);
      }),
    );
  }

  private getPokemonEvolutions(chainId: number): Observable<any> {
    return this.http.get(`${this.url}/evolution-chain/${chainId}`).pipe(
      map((res) => this.formatPokemonEvolutions(res)),
    );
  }

  private pokemonMapper(pokemon: Pokemon): Pokemon {
    return {
      ...pokemon,
      types: pokemon.types.map((type: any) => type.type.name),
      stats: this.formatStats(pokemon.stats),
    };
  }

  private formatStats(data: any): Stats {
    const formattedStats: any = {};

    data.forEach((it: any) => {
      formattedStats[it.stat.name] = it.base_stat;
    });
    return formattedStats;
  }

  private formatPokemonEvolutions(data: any) {
    const evolutions: any = [];

    const process = (chain: any) => {
      const id = chain.species.url.split('/').filter(Boolean).pop();

      if (chain.species) {
        evolutions.push({
          id: id,
          name: chain.species.name,
        });
      }

      if (chain.evolves_to.length > 0) {
        process(chain.evolves_to[0]);
      }
    };

    process(data.chain);
    return evolutions;
  }
}
