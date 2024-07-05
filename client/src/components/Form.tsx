import { SetStateAction, Dispatch } from 'react';
import { Ingredient } from './index';
import { useFormInput, useFormAddDelete } from '../hooks';

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
    <>
      <div className='form-container'>
        <div className='form-header-container'>
          <h1 className='form-title'>Search for a Recipe</h1>
        </div>
        <div className='form-body-container'>
          {/* equivalent to value={ingredient.value} onChange={ingredient.onChange} due to naming of fields*/}
          <input type='text' {...ingredient} />
          <button onClick={addIngredient}> Add Item</button>
        </div>
      </div>
      <div className='items-list'>
        {listIngredients.map((item: Item) => {
          return <Ingredient name={item.name} id={item.id} deleteItem={deleteItem} />;
        })}
      </div>
    </>
  );
};

export default Form;
