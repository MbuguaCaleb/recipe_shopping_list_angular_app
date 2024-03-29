import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeEditComponent } from "./recipies/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipies/recipe-start/recipe-start.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

/**Rmember there is no slash to my routes */
const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipeDetailComponent },
      { path: ":id/edit", component: RecipeEditComponent },
    ],
  },
  { path: "shopping-list", component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//App Routing Module will bundle all the routing functionality
//empty path in front end framewroks marches all the paths
