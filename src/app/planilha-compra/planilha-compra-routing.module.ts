import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanilhaCompraComponent } from './planilha-compra.component';


const routes: Routes = [
  {
    path: '',
    component: PlanilhaCompraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanilhaCompraRoutingModule { }
