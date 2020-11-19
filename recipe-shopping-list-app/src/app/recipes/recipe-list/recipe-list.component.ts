import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipies.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 //array holding a couple of recipe objects
 //thus the type is recipe(our custom model)
  recipies:Recipe[] = [
    new Recipe('A test Recipe','this is a test', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg'),
    new Recipe('A test Recipe','this is a test', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg'),
    new Recipe('A test Recipe','this is a test', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
