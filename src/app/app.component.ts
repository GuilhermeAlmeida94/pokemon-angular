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
    this.getMainInformation();
  }

  private getMainInformation(sufix?: string): void {
    this.pokemonService.getList(sufix)
      .subscribe(
        result => this.pokemonList = result,
        _ => this.pokemonList = null
      );
  }

  public previousList(): void {
    if (this.pokemonList.previous) {
      const previousParts = this.pokemonList.previous.split('?');
      const sufix = `?${previousParts[previousParts.length - 1]}`;
      this.getMainInformation(sufix);
    }
  }

  public nextList(): void {
    if (this.pokemonList.next) {
      const nextParts = this.pokemonList.next.split('?');
      const sufix = `?${nextParts[nextParts.length - 1]}`;
      this.getMainInformation(sufix);
    }
  }
}
