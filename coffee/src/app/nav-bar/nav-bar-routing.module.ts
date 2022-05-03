import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarColaboradorComponent } from '../colaborador/listar-colaborador/listar-colaborador.component';

const routes: Routes =
[
  {path : 'home' , component : ListarColaboradorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavBarRoutingModule { }
