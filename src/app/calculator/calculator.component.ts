import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  age: number = 0;
  gender: number = 0;
  bodyFat: number = 0;
  height: number = 0;
  weight: number = 0;
  activity: number = 0;
  unit: number = 1;
  formula: number = 0;
  calorieResult: string = '';

  calculateCalories() {
    let bmr: number=0;

    if (this.formula === 0) {
      if (this.gender === 0) {
        bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
      } else {
        bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
      }
    } else if (this.formula === 1) {
      if (this.gender === 0) {
        bmr = 13.397 * this.weight + 4.799 * this.height - 5.677 * this.age + 88.362;
      } else {
        bmr = 9.247 * this.weight + 3.098 * this.height - 4.33 * this.age + 447.593;
      }
    } else if (this.formula === 2) {
      bmr = 370 + 21.6 * (1 - this.bodyFat / 100) * this.weight;
    }

    let ret: number = bmr * this.activity;
    if (this.unit === 11) {
      ret = ret * 4.1868;
    }

    this.calorieResult = `Calorie Amount: ${ret.toFixed(2)} Calories`;
  }
}
