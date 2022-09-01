import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  // templateUrl: './contador.component.html',
  template:  `<h1>{{ title }}</h1>
  <h3>
    La Base es <strong>{{ base }}</strong>
  </h3>
  
  <button (click)="fnAccumulate(+base)">+{{ base }}</button>
  <span>{{ counter }}</span>
  
  <button (click)="fnAccumulate(-base)">-{{ base }}</button>
  `,
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  public title  : string = 'Contador';
  public counter: number = 0;
  public base   : number = 5;

  fnAccumulate = (added: number) => {
    this.counter += added;
  };
  constructor() { }

  ngOnInit() {
  }

}