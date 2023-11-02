import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { Pokemon, PokemonsResponse } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly url = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  public getPokemons(page: number, limit: number): Observable<PokemonsResponse> {
    const offset = (page - 1) * limit;
    return this.http.get<PokemonsResponse>(`${this.url}/pokemon?offset=${offset}&limit=${limit}`);
  }

  public getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}/pokemon/${name}`);
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

  public pokemonListMapper(pokemons: Pokemon[]): Pokemon[] {
    return pokemons.map(({ id, name, types }) => ({
      id: id,
      name: name,
      types: types.map((type: any) => type.type.name)
    }));
  }
}
