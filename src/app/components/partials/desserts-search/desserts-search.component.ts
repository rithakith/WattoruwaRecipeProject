import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-desserts-search',
  templateUrl: './desserts-search.component.html',
  styleUrls: ['./desserts-search.component.css']
})
export class DessertsSearchComponent implements OnInit {
  searchTerm = '';
  constructor(activatedRoute:ActivatedRoute,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm) 
      this.searchTerm = params.searchTerm;
    });

}
ngOnInit(): void {
    
}
search(term:string):void{
  if(term)
  this.router.navigateByUrl('menu/desserts/search/'+term);
}
}
