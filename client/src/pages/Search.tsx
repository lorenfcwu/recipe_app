import { useState } from 'react';
import { Form, SectionWrapper, RecipeCard } from '../components';
import '../assets/styles/search.css';
import img from '../assets/images/zucchini-pizza-crust-with-lemony-pea-pesto.jpg';
import img2 from '../assets/images/zucchini-frittata-with-blossoms-12522.jpg';
import img3 from '../assets/images/zucchini-lentil-fritters-with-lemony-yogurt.jpg';
import img4 from '../assets/images/sauteed-pasta-with-lobster-103190.jpg';

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
            <RecipeCard image={recipe.image_url} title={recipe.title} id={recipe.id} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default CreateRecipe;
