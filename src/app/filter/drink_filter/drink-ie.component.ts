import { Component, OnInit } from '@angular/core';
import { Drinks } from 'src/app/shared/models/drinks';
import { sample_drinks } from 'src/drinks_data';
// Import your drink data

@Component({
  selector: 'app-drink-ie', // Rename the selector accordingly
  templateUrl: './drink-ie.component.html', // Rename the template file accordingly
  styleUrls: ['./drink-ie.component.css'] // Rename the CSS file accordingly
})
export class DrinkIeComponent implements OnInit {
  includeIngredient: string = '';
  includeCheckbox: boolean = false;
  excludeIngredient: string = '';
  excludeCheckbox: boolean = false;
  drinks: Drinks[] = []; // Replace with your Drinks array
  filteredDrinks: Drinks[] = []; // Initialize filteredDrinks array

  ngOnInit(): void {
    // Initialize your drinks array with all recipes
    this.drinks = sample_drinks; // Replace with your drink data

    // Show all recipes initially
    this.searchRecipes();
  }

  searchRecipes() {
    // Filter drinks based on includeIngredient and excludeIngredient
    this.filteredDrinks = this.drinks.filter((drink) => {
      const includesIngredient = this.includeCheckbox
        ? drink.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(this.includeIngredient.toLowerCase())
          )
        : true; // Include by default if checkbox is not checked

      const excludesIngredient = this.excludeCheckbox
        ? !drink.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(this.excludeIngredient.toLowerCase())
          )
        : true; // Exclude by default if checkbox is not checked

      return includesIngredient && excludesIngredient;
    });

    // If both search bars are empty and both checkboxes are checked, show all recipes
    if (
      !this.includeIngredient &&
      !this.excludeIngredient &&
      this.includeCheckbox &&
      this.excludeCheckbox
    ) {
      this.filteredDrinks = this.drinks;
    }
  }
}
