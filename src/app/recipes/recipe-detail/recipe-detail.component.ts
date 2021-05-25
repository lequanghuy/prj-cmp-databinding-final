import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ConsoleReporter } from 'jasmine';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private slService: ShoppingListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.recipe = data['recipe'];
      }
    )
  }

  addIngredientToSl() {
    this.slService.addIngredients(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    //this.router.navigate(['../', this.recipe.id, 'edit'], { relativeTo: this.route });
  }
}
