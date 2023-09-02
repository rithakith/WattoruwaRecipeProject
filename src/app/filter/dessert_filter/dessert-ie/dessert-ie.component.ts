

import { Component, OnInit } from '@angular/core';
import { Desserts } from 'src/app/shared/models/desserts';
import { sample_desserts, sample_tags } from 'src/desserts_data';

@Component({
  selector: 'app-dessert-ie',
  templateUrl: './dessert-ie.component.html',
  styleUrls: ['./dessert-ie.component.css']
})
export class DessertIeComponent implements OnInit {
  includeIngredient: string = '';
  includeCheckbox: boolean = false;
  excludeIngredient: string = '';
  excludeCheckbox: boolean = false;
  desserts: Desserts[] = []; // Replace with your Desserts array
  filteredDesserts: Desserts[] = []; // Initialize filteredDesserts array

  ngOnInit(): void {
    // Initialize your desserts array with all recipes
    this.desserts = sample_desserts; // Replace with your dessert data
  }

  searchRecipes() {
    // Filter desserts based on includeIngredient and excludeIngredient
    this.filteredDesserts = this.desserts.filter((dessert) => {
      const includesIngredient = this.includeCheckbox
        ? dessert.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(this.includeIngredient.toLowerCase())
          )
        : true; // Include by default if checkbox is not checked

      const excludesIngredient = this.excludeCheckbox
        ? !dessert.ingredients.some((ingredient) =>
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
      this.filteredDesserts = this.desserts;
    }
  }
}
