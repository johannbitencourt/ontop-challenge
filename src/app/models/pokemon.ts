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

export interface Evolution {
  id: string;
  name: string;
}

export interface PokeApiPokemon {
  id: number;
  name: string;
  types: PokeApiPokemonType[];
  stats: PokeApiStat[];
}

export interface PokeApiResult {
  name: string;
  url: string;
}

export interface PokeApiStat {
  base_stat: number;
  effort: number;
  stat: PokeApiResult;
}

export interface PokeApiChain {
  evolves_to: PokeApiChain[];
  species: PokeApiResult;
  is_baby: boolean;
}

export interface PokeApiEvolutionChain {
  id: number;
  chain: PokeApiChain;
}

export interface PokeApiPokemonType {
  slot: number;
  type: PokeApiResult;
}

export interface PokemonsResponse {
  count: number;
  totalPages: number;
  results: PokeApiResult[];
}
