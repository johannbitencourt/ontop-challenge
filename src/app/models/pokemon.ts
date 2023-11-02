export interface Pokemon {
  id: number;
  name: string;
  types: string[]
}

export interface PokeApiResult {
  name: string;
  url: string;
}

export interface PokemonsResponse {
  count: number;
  totalPages: number;
  results: PokeApiResult[];
}
