import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { CharAddComponent } from './char-add/char-add.component';
import { HellsingService } from './services/Hellsing.service';



@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    CharAddComponent
  ],
  exports:[MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
    

  ]
  ,providers:[
    HellsingService
  ]
})
export class HellsingModule { }
