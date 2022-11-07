import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderComponent } from './page-header/page-header.component';

// Incluimos el componente "PageHeaderComponent" y lo exportamos para que se pueda usar en otros módulos
// Se importa IonicModule. Se podrá usar en todos los componentes de este módulo
@NgModule({
  declarations: [PageHeaderComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [PageHeaderComponent]
})
export class MisComponentesModule { }
