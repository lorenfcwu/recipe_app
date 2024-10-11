import { useState } from 'react';
import { Form, SectionWrapper, RecipeCard } from '../components';
import '../assets/styles/search.css';
import img from '../assets/images/zucchini-pizza-crust-with-lemony-pea-pesto.jpg';
import img2 from '../assets/images/zucchini-frittata-with-blossoms-12522.jpg';
import img3 from '../assets/images/zucchini-lentil-fritters-with-lemony-yogurt.jpg';
import img4 from '../assets/images/sauteed-pasta-with-lobster-103190.jpg';

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
          <RecipeCard image={img2} title='Zucchini Frittata with Blossoms' id={1} />
          <RecipeCard image={img3} title='Zucchini-Lentil Fritters With Lemony Yogurt' id={1} />
          <RecipeCard image={img4} title='Sauteed Pasta with Lobster' id={1} />
        </div>
      </SectionWrapper>
    </>
  );
};

export default CreateRecipe;
