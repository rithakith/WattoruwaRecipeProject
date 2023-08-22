import { Injectable } from '@angular/core';
import { Drinks } from '../shared/models/drinks';
import { sample } from 'rxjs';
import { sample_drinks } from 'src/drinks_data';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor() { }

  getAll():Drinks[]{
    return sample_drinks;
  }
  getAllDrinksBySearchTerm(searchTerm:string){
    return this.getAll().filter(drink=>drink.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
