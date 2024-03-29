import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  //storing my Sunscription so as to later destroy it
  private igChangeSub: Subscription;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    /*getting my ingredients from the service*/
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  //clearing my Subscription
  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }
}
