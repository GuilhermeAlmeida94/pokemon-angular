import { Component, Input } from '@angular/core';
import { ColorType } from '../../util/color-type';

@Component({
  selector: 'app-chip-type',
  templateUrl: './chip-type.component.html',
  styleUrls: ['./chip-type.component.scss']
})
export class ChipTypeComponent  {

  @Input() type: string;

  constructor() { }

  get colorType(): string {
    return ColorType.getColorByType(this.type);
  }
}
