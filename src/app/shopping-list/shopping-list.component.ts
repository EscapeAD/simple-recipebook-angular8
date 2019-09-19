import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = []
  constructor() { }

  ngOnInit() {
    this.ingredients.push(new Ingredient("New York Sorlin", 200, "g"))
    this.ingredients.push(new Ingredient("Butter", 50, "g"))
  }

}
