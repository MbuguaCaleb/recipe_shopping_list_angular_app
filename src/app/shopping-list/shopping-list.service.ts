import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

  ingredientsChanged = new EventEmitter<Ingredient[]>();

    //Array of object types
  private ingredients:Ingredient[]=[
    new Ingredient('Apples', 5),
    new Ingredient('Apples', 5),
   ];

  /*Its not advisable to interact with array directly
    This is why  i am adding this method
  */

  getIngredients(){
    //gets a copy of our original array
    return this.ingredients.slice();
  }

 addIngredient(ingredient:Ingredient){
      this.ingredients.push(ingredient);

      //here i am getting the updated copy then emmitting  it
      this.ingredientsChanged.emit(this.ingredients.slice());
 }
   
}