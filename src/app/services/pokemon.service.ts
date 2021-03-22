import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PokemonList } from '../models/pokemon-list';
import { PokemonForm } from '../models/pokemon-form';
import { PokemonItem } from '../models/pokemon-item';

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

  public getItem(pokemonId: string): Observable<PokemonItem> {
    return this.httpClient.get<PokemonItem>(`${this.url}pokemon/${pokemonId}`);
  }

  public getForm(pokemonId: string): Observable<PokemonForm> {
    return this.httpClient.get<PokemonForm>(`${this.url}pokemon-form/${pokemonId}`);
  }
}
