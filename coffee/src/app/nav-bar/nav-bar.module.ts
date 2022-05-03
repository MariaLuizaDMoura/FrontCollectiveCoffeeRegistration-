import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarRoutingModule } from './nav-bar-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ColaboradorModule } from '../colaborador/colaborador.module';


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    NavBarRoutingModule,
    ColaboradorModule,
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
