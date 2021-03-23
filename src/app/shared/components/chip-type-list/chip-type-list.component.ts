import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip-type-list',
  templateUrl: './chip-type-list.component.html',
  styleUrls: ['./chip-type-list.component.scss']
})
export class ChipTypeListComponent {

  @Input() types: string[];

  constructor() { }
}
