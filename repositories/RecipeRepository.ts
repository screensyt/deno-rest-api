import db from "../db/mongo.ts";
import IRecipe from "../entities/IRecipe.ts";

class RecipeRepository {
  constructor() {}

  readonly recipeCollection = db.collection("recipes");

  async find() {
    const recipes = await this.recipeCollection.find();
    return recipes;
  }

  async insertOne(recipe: IRecipe) {
    const { $oid } = await this.recipeCollection.insertOne(recipe);
    return $oid;
  }
}

export default RecipeRepository;
