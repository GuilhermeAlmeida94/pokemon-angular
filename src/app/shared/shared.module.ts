import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeballLoadingComponent } from './components/pokeball-loading/pokeball-loading.component';
import { WheelTypesComponent } from './components/wheel-types/wheel-types.component';
import { WheelTypesShadowComponent } from './components/wheel-types-shadow/wheel-types-shadow.component';
import { ChipTypeComponent } from './components/chip-type/chip-type.component';
import { ChipTypeListComponent } from './components/chip-type-list/chip-type-list.component';
import { SpriteWheelComponent } from './components/sprite-wheel/sprite-wheel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PokeballLoadingComponent,
    WheelTypesComponent,
    WheelTypesShadowComponent,
    ChipTypeComponent,
    ChipTypeListComponent,
    SpriteWheelComponent
  ],
  exports: [
    PokeballLoadingComponent,
    WheelTypesComponent,
    WheelTypesShadowComponent,
    ChipTypeComponent,
    ChipTypeListComponent,
    SpriteWheelComponent
  ]
})
export class SharedModule { }
