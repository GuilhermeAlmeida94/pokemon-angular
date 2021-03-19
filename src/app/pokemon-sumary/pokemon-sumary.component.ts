import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PokemonDetail } from '../models/pokemon-detail';
import { PokemonForm } from '../models/pokemon-form';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-sumary',
  templateUrl: './pokemon-sumary.component.html',
  styleUrls: ['./pokemon-sumary.component.scss']
})
export class PokemonSumaryComponent implements OnChanges {

  @Input() pokemon: PokemonDetail;
  pokemonForm: PokemonForm = null;

  constructor(private pokemonService: PokemonService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.pokemon) {
      this.pokemonService.getForm(this.pokemonId)
        .subscribe(
          result => this.pokemonForm = result,
          _ => this.pokemonForm = null
        );
    }
  }

  get pokemonId(): string {
    const urlParts = this.pokemon.url.split('/');
    return urlParts[urlParts.length - 2];
  }

  get pokemonTitle(): string {
    return `#${this.pokemonId.padStart(3, '0')} - ${this.pokemon.name}`;
  }

  get pokemonSpriteUrl(): string {
    return this.pokemonService.getPokemonImageById(this.pokemonId);
  }

  get pokemonTypes(): string[] {
    if (this.pokemonForm) {
      return this.pokemonForm.types.map(types => types.type.name);
    } else {
      return [];
    }
  }
}
