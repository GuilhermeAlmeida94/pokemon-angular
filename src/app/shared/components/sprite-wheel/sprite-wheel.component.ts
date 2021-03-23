import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sprite-wheel',
  templateUrl: './sprite-wheel.component.html',
  styleUrls: ['./sprite-wheel.component.scss']
})
export class SpriteWheelComponent {

  @Input() spriteUrl: string;

  constructor() { }

}
