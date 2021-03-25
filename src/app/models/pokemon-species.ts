import { FlavorTextEntry } from './flavor-text-entry';

export interface PokemonSpecies {
    base_happiness: number;
    flavor_text_entries: FlavorTextEntry[];
}
