import { useState } from 'react';
import { Form, SectionWrapper, RecipeCard } from '../components';
import '../assets/styles/search.css';
import img from '../assets/images/zucchini-pizza-crust-with-lemony-pea-pesto.jpg';

const CreateRecipe = () => {
  const [listItems, setListItems] = useState<Item[]>([]);

  interface Item {
    name: string;
    id: number;
  }

  return (
    <>
      <SectionWrapper>
        <div className='search-header-container'>
          {' '}
          <Form listItems={listItems} setListItems={setListItems} />{' '}
        </div>
        <div className='search-body-container'>
          <RecipeCard image={img} title='Zucchini Pizza Crust with Lemony Pea Pesto' id={1} />
          <RecipeCard image={img} title='Zucchini Pizza Crust with Lemony Pea Pesto' id={1} />
          <RecipeCard image={img} title='Zucchini Pizza Crust with Lemony Pea Pesto' id={1} />
          <RecipeCard image={img} title='Zucchini Pizza Crust with Lemony Pea Pesto' id={1} />
        </div>
      </SectionWrapper>
    </>
  );
};

export default CreateRecipe;
