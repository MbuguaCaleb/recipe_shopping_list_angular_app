import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../../recipies.model';
import { RecipeService } from '../../recipies.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  //i may have a propery taking a type of a class that i had defined
  @Input() recipe:Recipe;
  

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  onSelected(){
    /*Call method in my service*/
    /*Once i emit from my service i can be able to listen globally across components*/
    this.recipeService.recipeSelected.emit(this.recipe);
    
  }
}
