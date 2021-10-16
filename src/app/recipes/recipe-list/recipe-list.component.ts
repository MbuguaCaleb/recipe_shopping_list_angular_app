import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "../recipies.model";
import { RecipeService } from "../recipies.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  //array holding a couple of recipe objects
  //thus the type is recipe(our custom model)

  recipies: Recipe[];
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipies = this.recipeService.getRecipies();
  }

  //its good practice to add relativeTo when navigating pragamatically
  onNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
