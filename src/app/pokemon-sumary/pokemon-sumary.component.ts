import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetail } from '../models/pokemon-detail';

@Component({
  selector: 'app-pokemon-sumary',
  templateUrl: './pokemon-sumary.component.html',
  styleUrls: ['./pokemon-sumary.component.scss']
})
export class PokemonSumaryComponent implements OnInit {

  @Input() pokemon: PokemonDetail;

  constructor() { }

  ngOnInit(): void {
  }

  get pokemonNumber(): string {
    const urlParts = this.pokemon.url.split('/');
    return urlParts[urlParts.length - 2]
  }

  get pokemonTitle(): string {
    return `#${this.pokemonNumber.padStart(3, '0')} - ${this.pokemon.name}`;
  }

  get pokemonSpriteUrl(): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonNumber}.png`;
  }

}
