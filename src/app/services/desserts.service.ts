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
 getDessertsByID(dessertsId:string):Desserts{
    return this.getAll().find(desserts => desserts.id == dessertsId) ?? new Desserts(); }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllDessertsByTag(tag:string):Desserts[]{
    return tag === "All"?
    this.getAll():
    this.getAll().filter(desserts=>desserts.tags?.includes(tag));
  }

  getAllDessertsBySearchTerm(searchTerm:string){
    return this.getAll().filter(desserts=>desserts.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
