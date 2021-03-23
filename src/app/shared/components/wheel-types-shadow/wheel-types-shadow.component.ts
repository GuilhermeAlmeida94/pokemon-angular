import { Component, Input, OnInit } from '@angular/core';
import { ColorType } from '../../util/color-type';

@Component({
  selector: 'app-wheel-types-shadow',
  templateUrl: './wheel-types-shadow.component.html',
  styleUrls: ['./wheel-types-shadow.component.scss']
})
export class WheelTypesShadowComponent  {

  @Input() types: string[];
  @Input() spriteUrl: string;

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

  get boxShadow(): string {
    return `0px -5px 10px 1px ${this.firstColor}, 0px 5px 10px 1px ${this.secondColor}`;
  }
}
