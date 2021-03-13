import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/service/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageServiceService {
  private URL =
    'https://udemy-angular-course-b0fc4-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http.put(this.URL + '/recipes.json', recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(this.URL + '/recipes.json').subscribe((recipes) => {
      this.recipesService.setRecipes(recipes);
    });
  }
}
