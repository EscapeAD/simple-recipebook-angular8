import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  @Output()
  theRecipe = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit() {
    this.recipes.push(new Recipe("Quick Steak", "Cook a amazing Steak in 5 mins", "https://media1.s-nbcnews.com/j/newscms/2018_07/1318715/grilled-steak-today-tease-180216_89508b219dd455b4d43311782841f938.today-inline-large.jpg"))
    this.recipes.push(new Recipe("Steak and Broccoli", "steak and brocolli", "https://cms.splendidtable.org/sites/default/files/styles/w2000/public/Jalapeno_Honey_Steak_JPG-LEDE.jpg?itok=qDtX2pmz"))
  }

  onRecipeSelected(recipe: Recipe){
    this.theRecipe.emit(recipe)
  }
}
