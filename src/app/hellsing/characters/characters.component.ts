import { Component,Input } from '@angular/core';


import {Character} from '../interfaces/Hellsing.interfaces'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent  {

   @Input() Characters:Character[]= []; 
   




}
