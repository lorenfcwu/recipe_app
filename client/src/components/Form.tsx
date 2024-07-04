import { SetStateAction, useState, Dispatch } from 'react';
import { Ingredient } from './index';

interface Props {
  listItems: Item[];
  setListItems: Dispatch<SetStateAction<Item[]>>;
}

interface Item {
  name: string;
  id: number;
}

const Form = ({ listItems, setListItems }: Props) => {
  const [input, setInput] = useState<string>('');

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const addItem = () => {
    const item: Item = {
      name: input,
      id: listItems.length === 0 ? 1 : listItems[listItems.length - 1].id + 1,
    };
    setListItems([...listItems, item]);
  };

  const deleteItem = (itemId: number) => {
    setListItems(listItems.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <div className='form-container'>
        <div className='form-header-container'>
          <h1 className='form-title'>Search for a Recipe</h1>
        </div>
        <div className='form-body-container'>
          <input onChange={handleInput} />
          <button onClick={addItem}> Add Item</button>
        </div>
      </div>
      <div className='items-list'>
        {listItems.map((item) => {
          return <Ingredient name={item.name} id={item.id} deleteItem={deleteItem} />;
        })}
      </div>
    </>
  );
};

export default Form;
