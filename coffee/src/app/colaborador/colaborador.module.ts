import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradorRoutingModule } from './colaborador-routing.module';
import { ListarColaboradorComponent } from './listar-colaborador/listar-colaborador.component';
import { CadastrarSnackComponent } from './cadastrar-snack/cadastrar-snack.component';


@NgModule({
  declarations: [
    ListarColaboradorComponent,
    CadastrarSnackComponent
  ],
  imports: [
    CommonModule,
    ColaboradorRoutingModule
  ],
  exports:[
    CadastrarSnackComponent,
    ListarColaboradorComponent,
  ]
})
export class ColaboradorModule { }
