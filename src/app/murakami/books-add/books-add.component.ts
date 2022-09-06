import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MurakamiBook } from '../interfaces/murakami.interfaces';
import { MurakamiService } from '../Services/Murakami.service';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',

})
export class BooksAddComponent  {

  // @Input() Books:MurakamiBook[] = []

  // @Output() onNewBook:EventEmitter<MurakamiBook> = new EventEmitter<MurakamiBook>(); 

  @Input() Def:MurakamiBook = {

      Description: 'Description'
     ,title:'Murakami Book'
     ,year:2022

  }

  fnAdd= (event:MurakamiBook)=>
  {

    
    if(this.Def.Description.length===0)return;  
    if(this.Def.title.length===0)return;

    const newMurakamiBook = structuredClone(this.Def);

    this.MurakamiService.fnAddBook(newMurakamiBook);




    // this.onNewBook.emit(newChar);



  }

  constructor(private MurakamiService:MurakamiService) {


   }

  

}
