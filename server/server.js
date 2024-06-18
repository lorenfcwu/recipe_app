import express from 'express';

import { getRecipes, getRecipeByID, createRecipe } from './database.js';

const app = express();

app.use(express.json());

app.get('/recipe', async (req, res) => {
  const recipes = await getRecipes();
  res.send(recipes);
});

app.get('/recipe/:id', async (req, res) => {
  const id = req.params.id;
  const recipe = await getRecipeByID(id);
  res.send(recipe);
});

app.post('/recipe', async (req, res) => {
  const { name, ingredients, instructions } = req.body;
  const recipe = await createRecipe(name, ingredients, instructions);
  res.status(201).send(recipe);
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
