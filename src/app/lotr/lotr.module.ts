import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { AinurComponent } from './ainur/ainur.component';

@NgModule({
  imports: [CommonModule],
  exports: [ListadoComponent, HeroeComponent,AinurComponent],
  declarations: [ListadoComponent, HeroeComponent, AinurComponent],
})
export class LotrModule {}
