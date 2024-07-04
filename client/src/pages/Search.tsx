import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Axios from 'axios';
import { Form, SectionWrapper } from '../components';

const CreateRecipe = () => {
  const { register, handleSubmit } = useForm();
  const [recipeName, setRecipeName] = useState<string>('');
  const [recipeIngredients, setRecipeIngredients] = useState<string>('');
  const [listItems, setListItems] = useState<Item[]>([]);

  interface Item {
    name: string;
    id: number;
  }

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
    <>
      <SectionWrapper title='Create a Recipe'>
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
        <Form listItems={listItems} setListItems={setListItems} />
      </SectionWrapper>
    </>
  );
};

export default CreateRecipe;
