import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',

})
export class HeroeComponent implements OnInit {

  name: string = `Gandalf`;
  age: number = 92000000;

  get Nombre() {
    return this.name.toUpperCase();
  }

  fnMessage = () => {
    return `${this.name} - ${this.age}`;
  };

  constructor() {}

  ngOnInit() {}
}