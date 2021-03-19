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

  ngOnInit(): void { }

}
