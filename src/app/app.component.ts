import { Component, OnInit } from '@angular/core';
import { PokemonList } from './models/pokemon-list';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Pokémon Angular';
  pokemonList: PokemonList;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getList()
      .subscribe(
        result => this.pokemonList = result,
        _ => this.pokemonList = null
      );
  }
}
