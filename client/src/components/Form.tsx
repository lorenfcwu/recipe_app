import { SetStateAction, Dispatch } from 'react';
import { Ingredient } from './index';
import { useFormInput, useFormAddDelete } from '../hooks';
import '../assets/styles/form.css';
import * as IoIcons from 'react-icons/io5';

interface Props {
  listItems: Item[];
  setListItems: Dispatch<SetStateAction<Item[]>>;
}

export interface Item {
  name: string;
  id: number;
}

const Form = ({ listItems, setListItems }: Props) => {
  const ingredient = useFormInput('');
  const {
    handleSubmit: addIngredient,
    handleDelete: deleteItem,
    listValues: listIngredients,
  } = useFormAddDelete(ingredient.value, listItems, setListItems);

  return (
    <div className='form-container'>
      <div className='form-header-container'>
        <h1 className='form-title'>Search for a Recipe</h1>
      </div>
      <hr />
      <div className='form-body-container'>
        {/* equivalent to value={ingredient.value} onChange={ingredient.onChange} due to naming of fields*/}
        <div className='form-search-container'>
          <div className='form-input-container'>
            <input type='text' {...ingredient} />
            <button className='form-button' onClick={addIngredient}>
              Add Item
            </button>
          </div>
          <div className='form-filter-container'>
            <button className='filter-search'>
              <IoIcons.IoFilter />
            </button>
            <button className='form-button'>Search</button>
          </div>
        </div>

        <div className='items-container'>
          <h2>Ingredients: </h2>
          <div className='items-list'>
            {listIngredients.map((item: Item) => {
              return <Ingredient name={item.name} id={item.id} deleteItem={deleteItem} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
