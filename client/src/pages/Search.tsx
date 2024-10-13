import { useState } from 'react';
import { Form, SectionWrapper, RecipeCard } from '../components';
import '../assets/styles/search.css';

const CreateRecipe = () => {
  const [listItems, setListItems] = useState<Item[]>([]);
  const [recipes, setRecipes] = useState<any[]>([]);

  interface Item {
    name: string;
    id: number;
  }

  return (
    <>
      <SectionWrapper>
        <div className='search-header-container'>
          <Form listItems={listItems} setListItems={setListItems} recipes={recipes} setRecipes={setRecipes} />
        </div>
        <div className='search-body-container'>
          {recipes.map((recipe) => (
            <RecipeCard image={recipe.image_url} title={recipe.title} id={recipe.id} publisher={recipe.publisher} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default CreateRecipe;
