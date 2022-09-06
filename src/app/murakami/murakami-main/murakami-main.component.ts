import { Component, OnInit } from '@angular/core';
import { MurakamiBook } from '../interfaces/murakami.interfaces';
import { MurakamiService } from '../Services/Murakami.service';

@Component({
  selector: 'app-murakami-main',
  templateUrl: './murakami-main.component.html',
 
})
export class MurakamiMainComponent  {

  Def:MurakamiBook=  {
    Description:'a book of my past',
    title:`Tokio Blues`,
    year:1987
  };

  // get Books(){
  //   return this.MurakamiService.Books;
  // }

  // fnAddBook =  (event:MurakamiBook)=>{

  //   this.MurakamiService.Books.push(event);

  // }

  constructor(

    private MurakamiService:MurakamiService
  ) { }

 

}
