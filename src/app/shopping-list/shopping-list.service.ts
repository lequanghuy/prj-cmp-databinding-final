import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    eventAddIngredient = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    adIngredient(ingre: Ingredient) {
        this.ingredients.push(ingre);
        this.eventAddIngredient.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        //this.ingredients = this.ingredients.concat(ingredients);
        this.ingredients.push(...ingredients);
        this.eventAddIngredient.emit(this.ingredients.slice());
    }
    
}