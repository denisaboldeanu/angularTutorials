import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.module';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
selectedRecipe : Recipe;
  constructor() { }

  ngOnInit() {
  }
 
}
