import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinksService } from 'src/app/services/drinks.service';
import { Drinks } from 'src/app/shared/models/drinks';

@Component({
  selector: 'app-drinks-page',
  templateUrl: './drinks-page.component.html',
  styleUrls: ['./drinks-page.component.css']
})
export class DrinksPageComponent implements OnInit{
  drinks!:Drinks;
  constructor(activatedRoute:ActivatedRoute,drinksService:DrinksService){
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      this.drinks = drinksService.getDrinksByID(params.id)
    })
  }
  ngOnInit(): void {
      
  }
}
