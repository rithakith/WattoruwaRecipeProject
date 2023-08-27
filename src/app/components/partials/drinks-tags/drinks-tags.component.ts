import { Component ,OnInit} from '@angular/core';
import { DrinksService } from 'src/app/services/drinks.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-drinks-tags',
  templateUrl: './drinks-tags.component.html',
  styleUrls: ['./drinks-tags.component.css']
})
export class DrinksTagsComponent implements OnInit{
  tags?: Tag[];
  constructor(drinksService:DrinksService){
    this.tags = drinksService.getAllTags();
  }
  ngOnInit(): void {
      
  }
}
