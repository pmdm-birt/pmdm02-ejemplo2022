import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultasRestPageRoutingModule } from './consultas-rest-routing.module';

import { ConsultasRestPage } from './consultas-rest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultasRestPageRoutingModule
  ],
  declarations: [ConsultasRestPage]
})
export class ConsultasRestPageModule {}
