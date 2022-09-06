import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MurakamiMainComponent } from './murakami-main/murakami-main.component';
import { MurakamiService } from './Services/Murakami.service';
import { BooksAddComponent } from './books-add/books-add.component';
import { FormsModule } from '@angular/forms';
import { BooksListComponent } from './books-list/books-list.component';



@NgModule({
  declarations: [
    MurakamiMainComponent,
    BooksAddComponent,
    BooksListComponent
  ],
  imports: [
    CommonModule
    ,FormsModule
  ],
  exports:[MurakamiMainComponent],
  providers:[MurakamiService]
})
export class MurakamiModule {



 }
