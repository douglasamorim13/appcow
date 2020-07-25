import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanilhaCompraRoutingModule } from './planilha-compra-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PlanilhaCompraComponent } from './planilha-compra.component';


@NgModule({
  declarations: [PlanilhaCompraComponent],
  imports: [
    CommonModule,
    // BrowserModule,
    PlanilhaCompraRoutingModule
  ]
})
export class PlanilhaCompraModule { }
