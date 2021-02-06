import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipies.model';
import { RecipeService } from './recipies.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe:Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    /*setting up a listener if there is a change the recipe gets listened to on the subsribe*/
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe) =>{
        this.selectedRecipe=recipe;
      }
    );
  }
  

}
