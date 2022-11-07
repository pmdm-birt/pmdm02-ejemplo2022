import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertarPage } from './insertar.page';

const routes: Routes = [
  {
    path: '',
    component: InsertarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertarPageRoutingModule {}
