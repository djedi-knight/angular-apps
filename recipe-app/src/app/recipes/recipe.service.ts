import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Fettuccine-Carbonara_exps175448_SD143205B01_28_2bC_RMS-1-696x696.jpg')
  ];

  getRecipes() {
    return this.recipes.slice(); // Returns a copy of the array
  }
}