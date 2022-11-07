import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultasRestPage } from './consultas-rest.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultasRestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultasRestPageRoutingModule {}
