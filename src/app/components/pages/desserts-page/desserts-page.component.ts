import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DessertsService } from 'src/app/services/desserts.service';
import { Desserts } from 'src/app/shared/models/desserts';

@Component({
  selector: 'app-desserts-page',
  templateUrl: './desserts-page.component.html',
  styleUrls: ['./desserts-page.component.css']
})
export class DessertsPageComponent implements OnInit {
  desserts!:Desserts;
  constructor(activatedRoute:ActivatedRoute,dessertsService:DessertsService){
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      this.desserts = dessertsService.getDessertsByID(params.id);
    })
  
  }
  ngOnInit(): void {
      
  }
}
