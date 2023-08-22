import { Component,OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-drinks-search',
  templateUrl: './drinks-search.component.html',
  styleUrls: ['./drinks-search.component.css']
})
export class DrinksSearchComponent implements OnInit{
 searchTerm = '';
  constructor(activatedRoute:ActivatedRoute,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm) this.searchTerm = params.searchTerm;

    });
 }
 ngOnInit(): void {
     
 }
 search(term:string):void{
  if(term)
  this.router.navigateByUrl('/search/'+term);
 }
}
