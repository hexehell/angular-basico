import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';

@NgModule({
  imports: [CommonModule],
  exports: [ListadoComponent, HeroeComponent],
  declarations: [ListadoComponent, HeroeComponent],
})
export class LotrModule {}
