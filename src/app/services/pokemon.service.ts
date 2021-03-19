import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PokemonList } from '../models/pokemon-list';
import { PokemonForm } from '../models/pokemon-form';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = environment.url;
  private urlImage = environment.urlImage;

  constructor(private httpClient: HttpClient) { }

  public getList(sufix?: string): Observable<PokemonList> {
    if (!sufix) { sufix = ''; }
    return this.httpClient.get<PokemonList>(`${this.url}pokemon/${sufix}`);
  }

  public getPokemonImageById(pokemonId: string): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  }

  public getForm(pokemonId: string): Observable<PokemonForm> {
    return this.httpClient.get<PokemonForm>(`${this.url}pokemon-form/${pokemonId}`);
  }
}
