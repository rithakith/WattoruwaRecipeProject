import { Component ,OnInit} from '@angular/core';
import { DessertsService } from 'src/app/services/desserts.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-desserts-tags',
  templateUrl: './desserts-tags.component.html',
  styleUrls: ['./desserts-tags.component.css']
})
export class DessertsTagsComponent implements OnInit{
  tags?: Tag[];
  constructor(dessertsService:DessertsService){
    this.tags = dessertsService.getAllTags();
  }
  ngOnInit(): void {
      
  }
}
