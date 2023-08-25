import { Injectable } from '@angular/core';
import { Drinks } from '../shared/models/drinks';
import { sample } from 'rxjs';
import { sample_drinks } from 'src/drinks_data';
import { Tag } from '../shared/models/tag';
import { sample_tags } from 'src/food_data';

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
  getDrinksByID(drinksId:string):Drinks{
    return this.getAll().find(drinks => drinks.id == drinksId) ?? new Drinks(); }

    getAllTags():Tag[]{
      return sample_tags;
    }
  
    getAllFoodsByTag(tag:string):Drinks[]{
      return tag === "All"?
      this.getAll():
      this.getAll().filter(food=>food.tags?.includes(tag));
    }
  }


