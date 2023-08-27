import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DessertsService } from 'src/app/services/desserts.service';
import { FoodService } from 'src/app/services/food.service';
import { Desserts } from 'src/app/shared/models/desserts';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit{
  desserts:Desserts[]=[];
  constructor(private dessertsService:DessertsService,activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        this.desserts = this.dessertsService.getAllDessertsBySearchTerm(params.searchTerm)
      else
      this.desserts = dessertsService.getAll();
      })

}
ngOnInit(): void {
    
}
}
