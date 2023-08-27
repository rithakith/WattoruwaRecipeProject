import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
  
  <span *ngFor="let _ of starsArray; let i = index">
      <span [ngClass]="{ 'filled-star': i < stars, 'border-star': i >= stars }">
        &starf;
      </span>
    </span>
  `,
    styles: [`
    .filled-star {
      font-size: 150%;
      color: orange;
      
    }
    .border-star {
      font-size: 150%;
      color: grey;
      /* outline-color: 2px solid orange; */
    }
  `]
})
export class RatingComponent {
  @Input() stars: number = 0;
  starsArray: number[] = new Array(5).fill(0);
}
