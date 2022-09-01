import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ContadorComponent } from './contador/contador.component';
import { LotrModule } from './lotr/lotr.module';
import { ContadorModule } from './contador/contador.Module';

@NgModule({
  imports: [BrowserModule, FormsModule, LotrModule, ContadorModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
