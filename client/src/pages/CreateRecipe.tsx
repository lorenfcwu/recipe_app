import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Axios from 'axios';

const CreateRecipe = () => {
  const { register, handleSubmit } = useForm();
  const [recipeName, setRecipeName] = useState<string>('');
  const [recipeIngredients, setRecipeIngredients] = useState<string>('');

  const onSubmit = () => {
    Axios.post('/recipe', {
      name: recipeName,
      ingredients: recipeIngredients,
    })
      .then(() => {
        console.log(recipeName);
        alert('successful insert');
      })
      .catch((err) => {
        console.log(err);
        alert('error occured, try again later');
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='Recipe Name'
        {...register('recipe_name')}
        onChange={(text) => {
          setRecipeName(text.target.value);
        }}
      />
      <input
        type='text'
        placeholder='Ingredients'
        {...register('ingredients')}
        onChange={(text) => {
          setRecipeIngredients(text.target.value);
        }}
      />
      <input type='submit' />
    </form>
  );
};

export default CreateRecipe;
