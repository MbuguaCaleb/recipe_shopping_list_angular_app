import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipies.model";


export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    
    /*We cannot access it directly when it has been set to private*/
   private recipies:Recipe[] = [
        new Recipe('First Recipe','this is a test', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg'),
        new Recipe('Second Recipe','this is a test', 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg'),
        new Recipe('Third Recipe','this is a test', 
        'https://images.unsplash.com/photo-1551135020-39e4ca508d9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        )
      ];
    
    
    getRecipies(){
        return this.recipies.slice();
    }
    
}