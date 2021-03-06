import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(1, 'A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
        [
            new Ingredient('Meat', 1),
            new Ingredient('Frech Fries', 20)
        ]),
        new Recipe(2, 'Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
            new Ingredient('Buns', 2),
            new Ingredient('Frech Fries', 30),
        ])
    ];

    getRecipes() {
        return this.recipes.slice(); //Get the copy of array
    }

    getRecipe(id: number) {
        const recipe = this.recipes.find(
            (s) => {
                return s.id === id;
            }
        );
        return recipe;
    }
}