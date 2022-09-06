import { Injectable } from "@angular/core";
import { MurakamiBook } from "../interfaces/murakami.interfaces";

@Injectable()
export class MurakamiService{


   private  _Books:MurakamiBook[]= [
    {
        Description:'a book of my past',
        title:`Tokio Blues`,
        year:1987
    }

   ]; 
  
   get Books():MurakamiBook[] {

    return structuredClone(this._Books); 
            //[...this._Books] ;

   }

    constructor(){
        console.log("MurakamiService Init");

    }

    fnAddBook = (book:MurakamiBook)=>{

        this._Books.push(book);

    }

}