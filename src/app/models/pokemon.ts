export interface Pokemon {
  id: number;
  name: string;
  types: string[]
  stats: Stats;
}

export interface Stats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

export interface Evolution extends Pokemon {
  id: number;
  name: string;
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
