import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/Hellsing.interfaces';

@Component({
  selector: 'app-char-add',
  templateUrl: './char-add.component.html',
  
})
export class CharAddComponent {

  
   @Input('Default') Def:Character

  @Output() onNewChar: EventEmitter<Character> = new EventEmitter<Character>()

  // @Input() Characters:Character[]= []; 

 
  fnAdd= ()=>{

    if(this.Def.Name.length===0)return;  
    if(this.Def.Skill.length===0)return;

    const newChar = structuredClone(this.Def);
    this.onNewChar.emit(newChar);

    // this.Characters.push(newChar);
    // console.log(newChar);

  }
}
