import { Injectable } from '@angular/core';
import { Desserts } from '../shared/models/desserts';
import { sample_desserts, sample_tags } from 'src/desserts_data';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class DessertsService {

  constructor() { }

  getAll():Desserts[]{
    return sample_desserts;
  }
 getDessertsByID(foodId:string):Desserts{
    return this.getAll().find(food => food.id == foodId) ?? new Desserts(); }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllDessertsByTag(tag:string):Desserts[]{
    return tag === "All"?
    this.getAll():
    this.getAll().filter(food=>food.tags?.includes(tag));
  }

  getAllDessertsBySearchTerm(searchTerm:string){
    return this.getAll().filter(desserts=>desserts.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
