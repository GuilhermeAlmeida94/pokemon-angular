import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PokemonDetail } from '../models/pokemon-detail';
import { PokemonForm } from '../models/pokemon-form';
import { PokemonItem } from '../models/pokemon-item';
import { PokemonService } from '../services/pokemon.service';
import { ColorType } from '../shared/util/color-type';

@Component({
  selector: 'app-pokemon-sumary',
  templateUrl: './pokemon-sumary.component.html',
  styleUrls: ['./pokemon-sumary.component.scss']
})
export class PokemonSumaryComponent implements OnChanges {

  @Input() pokemon: PokemonDetail;
  pokemonItem: PokemonItem = null;
  pokemonFlavor: string = null;

  constructor(private pokemonService: PokemonService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.pokemon) {
      this.pokemonService.getItem(this.pokemonId)
        .subscribe(
          result => this.pokemonItem = result,
          _ => this.pokemonItem = null
        );

      this.pokemonService.getSpecies(this.pokemonId)
      .subscribe(
        result => this.pokemonFlavor = result.flavor_text_entries[0].flavor_text,
        _ => this.pokemonFlavor = null
      );
    }
  }

  get pokemonId(): string {
    const urlParts = this.pokemon.url.split('/');
    return urlParts[urlParts.length - 2];
  }

  get pokemonIdFormated(): string {
    return `#${this.pokemonId.padStart(3, '0')}`;
  }

  get firstType(): string {
    return this.pokemonTypes[0];
  }

  get colorSide(): string {
    return ColorType.getColorByType(this.firstType, '.6');
  }

  get colorContent(): string {
    return ColorType.getColorByType(this.firstType, '.8');
  }

  get pokemonSpriteUrl(): string {
    return this.pokemonItem.sprites.front_default;
  }

  get pokemonDescription(): string {
    return this.pokemonFlavor;
  }
  get pokemonTypes(): string[] {
    if (this.pokemonItem) {
      return this.pokemonItem.types.map(types => types.type.name);
    } else {
      return [];
    }
  }

  get stats(): string {
    return this.pokemonItem.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ');
  }
}
