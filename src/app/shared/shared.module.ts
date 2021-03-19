import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeballLoadingComponent } from './components/pokeball-loading/pokeball-loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PokeballLoadingComponent],
  exports: [PokeballLoadingComponent]
})
export class SharedModule { }
