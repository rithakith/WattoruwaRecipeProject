import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { sample_foods  } from 'src/food_data';

@Component({
  selector: 'app-food-ie',
  templateUrl: './food-ie.component.html',
  styleUrls: ['./food-ie.component.css']
})
export class FoodIeComponent implements OnInit {
  includeIngredient: string = '';
  includeCheckbox: boolean = false;
  excludeIngredient: string = '';
  excludeCheckbox: boolean = false;
  foods: Food[] = []; // Replace with your Foods array
  filteredFoods: Food[] = []; // Initialize filteredFoods array

  ngOnInit(): void {
    // Initialize your foods array with all recipes
    this.foods = sample_foods; // Replace with your food data

    // Show all recipes initially
    this.searchRecipes();
  }

  searchRecipes() {
    // Filter foods based on includeIngredient and excludeIngredient
    this.filteredFoods = this.foods.filter((food) => {
      const includesIngredient = this.includeCheckbox
        ? food.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(this.includeIngredient.toLowerCase())
          )
        : true; // Include by default if checkbox is not checked

      const excludesIngredient = this.excludeCheckbox
        ? !food.ingredients.some((ingredient) =>
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
      this.filteredFoods = this.foods;
    }
  }
}
