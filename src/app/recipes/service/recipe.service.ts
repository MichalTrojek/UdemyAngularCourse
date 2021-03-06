import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'First Recipe',
      'First description tada',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Recipe(
      'Second Recipe',
      'SEcond description',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
