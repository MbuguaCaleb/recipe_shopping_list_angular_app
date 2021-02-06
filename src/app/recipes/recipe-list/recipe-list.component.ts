import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipies.model';
import { RecipeService } from '../recipies.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 //array holding a couple of recipe objects
 //thus the type is recipe(our custom model)
 

 recipies:Recipe[];
  constructor(private recipeService:RecipeService) { }


  ngOnInit(): void {
    this.recipies = this.recipeService.getRecipies();
  }


}
