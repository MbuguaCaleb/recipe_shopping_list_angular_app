import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipies.model";


@Injectable()
export class RecipeService{
  
    recipeSelected = new EventEmitter<Recipe>();
    
    /*We cannot access it directly when it has been set to private*/
   private recipies:Recipe[] = [
        new Recipe('Chapati',
        'The Kenyan Favourite Meal', 
        'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg',
        [
          new Ingredient('Floor',1),
          new Ingredient('Cooking Oil',1)
        ]
        ),
        new Recipe(
          'Salad',
        'Healthy Fruit Salad', 
        'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg',
        [  
          new Ingredient('Grapes',1),
          new Ingredient('Capsicum',1)
        ]),
        new Recipe(
          'Beef Sausage',
          'Best Snack to Have', 
        'https://images.unsplash.com/photo-1551135020-39e4ca508d9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        [
          new Ingredient('Beef',1),
          new Ingredient('Olive Oil',1)
        ]
        )
      ];
    
    //injecting the other service must be through a constructor
    constructor(private slService:ShoppingListService){}

    
    getRecipies(){
        return this.recipies.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
      this.slService.addIngredients(ingredients);
    }
    
}