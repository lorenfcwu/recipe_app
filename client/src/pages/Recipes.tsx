import { useEffect, useState } from 'react';

interface Recipe {
  id: number;
  recipe_name: string;
  ingredients: string;
  instructions: string;
}

const Recipes = () => {
  const [backendData, setBackendData] = useState<Recipe[]>([]);

  //called when app initially rendered
  useEffect(() => {
    fetch('/recipe')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      {backendData.map((recipe: Recipe, key: number) => {
        return (
          <div key={recipe.id}>
            <h1>{recipe.id}</h1>
            <h2>{recipe.recipe_name}</h2>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
