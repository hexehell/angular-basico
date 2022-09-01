import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador.component';

@NgModule({
  imports: [CommonModule],
  exports: [ContadorComponent],
  declarations: [ContadorComponent],
})
export class ContadorModule {}
