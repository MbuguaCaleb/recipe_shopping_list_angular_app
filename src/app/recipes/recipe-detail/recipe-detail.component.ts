import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Ingredient } from "src/app/shared/ingredient.model";
import { Recipe } from "../recipies.model";
import { RecipeService } from "../recipies.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //react to a new id in recipe detail component
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
