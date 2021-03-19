import { Component, Input, OnInit } from '@angular/core';
import { ColorType } from '../shared/util/color-type';

@Component({
  selector: 'app-wheel-types',
  templateUrl: './wheel-types.component.html',
  styleUrls: ['./wheel-types.component.scss']
})
export class WheelTypesComponent  {

  @Input() types: string[];

  constructor() { }

  get firstType(): string {
    return this.types[0];
  }

  get secondType(): string {
    return this.types[1];
  }

  get hasSecondType(): boolean {
    return this.types[1] !== undefined;
  }

  get firstColor(): string {
    return ColorType.getColorByType(this.firstType);
  }

  get secondColor(): string {
    return ColorType.getColorByType(this.hasSecondType ? this.secondType : this.firstType);
  }
}
