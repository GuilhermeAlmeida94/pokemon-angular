import { PokemonDetail } from './pokemon-detail';

export interface PokemonList {
    count: number;
    next: string;
    previous: string;
    results: PokemonDetail[];
}
