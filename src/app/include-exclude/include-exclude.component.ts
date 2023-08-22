import { Component } from '@angular/core';

@Component({
  selector: 'app-include-exclude',
  templateUrl: './include-exclude.component.html',
  styleUrls: ['./include-exclude.component.css']
})
export class IncludeExcludeComponent {
  excludeIngredient = '';
  includeIngredient = '';
  includeCheckbox = false;
  excludeCheckbox = false;
  
  ingredientOptions: string[] = [
    'Milk'
    // Add more options as needed
  ];

  search(): void {
    // Your search logic here
    // Implement filtering recipes based on selected options
    // Display results based on the selected checkboxes and inputs
    console.log('Exclude Ingredient:', this.excludeIngredient);
    console.log('Include Ingredient:', this.includeIngredient);
    console.log('Include Checkbox:', this.includeCheckbox);
    console.log('Exclude Checkbox:', this.excludeCheckbox);
  }
}
