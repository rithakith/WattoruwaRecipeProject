import { Injectable } from '@angular/core';
import { Desserts } from '../shared/models/desserts';
import { sample_desserts } from 'src/desserts_data';

@Injectable({
  providedIn: 'root'
})
export class DessertsService {

  constructor() { }

  getAll():Desserts[]{
    return sample_desserts;
  }

}
