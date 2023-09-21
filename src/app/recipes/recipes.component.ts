import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  changeSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    console.log('ccc', this.selectedRecipe)
  }

}
