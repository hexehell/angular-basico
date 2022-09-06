import { Component, OnInit } from '@angular/core';

import {Character} from '../interfaces/Hellsing.interfaces'
import { HellsingService } from '../services/Hellsing.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {

  constructor(private HellsingService:HellsingService) { }


  Chars:Character[] = [

    {
       Name:'Alucard'
      ,Skill:'Invincible'
      ,kills:3000000


    }
    ,{
       Name:'Seras Victoria'
      ,Skill:'Dark Power Vampirism'
      ,kills:500

    },
    {
       Name:'Walter'
      ,Skill:'Shinigami Deadly Cords'
      ,kills:15

    }
  ];

  Def:Character={
    Name:'Alucard',
    Skill:'Invincible',
    kills:3000000
  }

  ngOnInit(): void {
  }

  fnAdd_old= (event:any)=>{

    event.preventDefault();
    console.log(event)

  }


  fnWritingName(event:any){

    event.preventDefault();
    console.log(event);


  }

  fnAddNewChar = (event:Character)=>{

    this.Chars.push(event)

  }


}
