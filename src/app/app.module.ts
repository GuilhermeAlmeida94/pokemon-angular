import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PokemonSumaryComponent } from './pokemon-sumary/pokemon-sumary.component';
import { SharedModule } from './shared/shared.module';
import { WheelTypesComponent } from './wheel-types/wheel-types.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonSumaryComponent,
    WheelTypesComponent
   ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
