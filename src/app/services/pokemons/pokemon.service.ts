import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map, switchMap } from 'rxjs';
import { Evolution, PokeApiChain, PokeApiEvolutionChain, PokeApiPokemon, PokeApiPokemonType, PokeApiStat, Pokemon, PokemonsResponse, Stats } from '../../models/pokemon';


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
    return this.http.get<PokeApiPokemon>(`${this.url}/pokemon/${name}`).pipe(
      map((pokemon) => this.pokemonMapper(pokemon)),
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

  public getPokemonSpecies(name: string): Observable<Evolution[]> {
    return this.http.get(`${this.url}/pokemon-species/${name}`).pipe(
      switchMap(({ evolution_chain }: any) => {
        const chainId = evolution_chain.url.split('/').filter(Boolean).pop() || '';
        return this.getPokemonEvolutions(chainId);
      }),
    );
  }

  private getPokemonEvolutions(chainId: string): Observable<Evolution[]> {
    return this.http.get(`${this.url}/evolution-chain/${chainId}`).pipe(
      map((res) => this.formatPokemonEvolutions(res as PokeApiEvolutionChain)),
    );
  }

  private pokemonMapper(pokemon: PokeApiPokemon): Pokemon {
    return {
      ...pokemon,
      types: this.formatPokemonTypes(pokemon.types),
      stats: this.formatStats(pokemon.stats),
    };
  }

  private formatPokemonTypes(types: PokeApiPokemonType[]) {
    return types.map((type) => type.type.name)
  }

  private formatStats(data: PokeApiStat[]): Stats {
    const formattedStats: { [key: string]: number } = {};

    data.forEach((it: PokeApiStat) => {
      formattedStats[it.stat.name] = it.base_stat;
    });
    return formattedStats as unknown as Stats;
  }

  private formatPokemonEvolutions(data: PokeApiEvolutionChain): Evolution[] {
    const evolutions: Evolution[] = [];

    const process = (chain: PokeApiChain) => {
      const id: string = chain.species.url.split('/').filter(Boolean).pop() || '';

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
