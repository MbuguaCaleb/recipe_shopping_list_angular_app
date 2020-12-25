import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipies.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 //array holding a couple of recipe objects
 //thus the type is recipe(our custom model)
 
 @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipies:Recipe[] = [
    new Recipe('First Recipe','this is a test', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg'),
    new Recipe('Second Recipe','this is a test', 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg'),
    new Recipe('Third Recipe','this is a test', 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
