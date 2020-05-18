import { Router } from "https://deno.land/x/oak/mod.ts";

import { getRecipes, createRecipe } from "./controllers/recipeController.ts";

const router = new Router();

router
  .get("/recipes", getRecipes)
  .post("/recipes", createRecipe);

export default router;
