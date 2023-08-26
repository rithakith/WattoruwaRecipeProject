import { Component } from '@angular/core';

interface User {
  name: string;
  age: number;
  gender: 'male' | 'female';
  formula: 'mifflin' | 'revised' | 'katch';
  height:number;
  weight:number;
  fat:number;
}
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  user: User = {
    name: '',
    age: 0,
    gender: 'male',
    formula: 'mifflin',
    height:0,
    weight:0,
    fat:0,
  };

  showResults: boolean = false;
  maintainCalories: number = 0;
  mildLossCalories: number = 0;
  weightLossCalories: number = 0;
  extremeLossCalories: number = 0;

  submitForm() {
    const name = this.user.name;
    const weightInKg = this.user.weight;
    const heightInCm = this.user.height;
    const age = this.user.age;
    const fat = this.user.fat;
    const percent_fat = fat / 100;
  
    // Calculate BMR values based on formula, gender, and goal
    const mifflinBMR = (this.user.gender === 'male')
      ? (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) + 5
      : (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) - 161;
  
    const revisedBMR = (this.user.gender === 'male')
      ? (13.397 * weightInKg) + (4.799 * heightInCm) - (5.677 * age) + 88.362
      : (9.247 * weightInKg) + (3.098 * heightInCm) - (4.33 * age) + 447.593;
  
    const katchBMR = 370 + 21.6 * (1 - percent_fat) * weightInKg;
  
    // Calculate caloric intake values for each goal
    const maintainCalories = mifflinBMR;
    const mildLossCalories = mifflinBMR * 0.9;
    const weightLossCalories = mifflinBMR * 0.79;
    const extremeLossCalories = mifflinBMR * 0.59;
  
    // Display calculated values
    this.maintainCalories = Math.floor(maintainCalories);
    this.mildLossCalories = Math.floor(mildLossCalories);
    this.weightLossCalories = Math.floor(weightLossCalories);
    this.extremeLossCalories = Math.floor(extremeLossCalories);

    this.showResults = true; // Display the results div
  }
}
