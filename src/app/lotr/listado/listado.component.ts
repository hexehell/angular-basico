import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {
  constructor() {
    console.log('construnctor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  chardeleted: string ;
  Chars: string[] = [
    'Gandalf',
    'Glorfindel',
    'Aragorn',
    'Melkor',
    'Sauron',
    'Ungoliant',
    'Maeglin',
  ];

  fnDeleteChar = () => {
    this.chardeleted = this.Chars.shift();
  };

  get deleted() {
    return `Recently deleted: ${this.chardeleted}`;
  }

  get deletedEmpty(){

    return `the array is full`;
  }
}
