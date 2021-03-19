import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PokemonList } from '../models/pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = environment.url;

  constructor(private httpClient: HttpClient) { }

  public getList(): Observable<PokemonList> {
    return this.httpClient.get<PokemonList>(`${this.url}pokemon/`);
  }

}
