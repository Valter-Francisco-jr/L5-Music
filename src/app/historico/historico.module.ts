import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoRoutingModule } from './historico-routing.module';
import { HistoricoListaComponent } from './historico-lista/historico-lista.component';


@NgModule({
  declarations: [
    HistoricoListaComponent
  ],
  imports: [
    CommonModule,
    HistoricoRoutingModule,
    ReactiveFormsModule
  ]
})
export class HistoricoModule { }


  export class FormGroup {
   constructor(
     public title: string,
   ) { }

  }


