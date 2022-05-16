import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicaRoutingModule } from './musica-routing.module';
import { MusicaListaComponent } from './musica-lista/musica-lista.component';


@NgModule({
  declarations: [
    MusicaListaComponent
  ],
  imports: [
    CommonModule,
    MusicaRoutingModule
  ]
})
export class MusicaModule { }
