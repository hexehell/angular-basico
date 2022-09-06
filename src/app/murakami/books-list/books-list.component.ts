import { Component, Input, OnInit } from '@angular/core';
import { MurakamiBook } from '../interfaces/murakami.interfaces';
import { MurakamiService } from '../Services/Murakami.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',

})
export class BooksListComponent {

  // @Input() Books:MurakamiBook[]= []; 

  get Books():MurakamiBook[]{

    return this.MurakamiService.Books;
  }

  constructor(private MurakamiService:MurakamiService){}
}
