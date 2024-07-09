import { useState } from 'react';
import { Form, SectionWrapper } from '../components';
import '../assets/styles/search.css';

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
        <div className='search-body-container'></div>
      </SectionWrapper>
    </>
  );
};

export default CreateRecipe;
