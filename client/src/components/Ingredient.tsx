import '../assets/styles/ingredient.css';
import * as IoIcons from 'react-icons/io5';

interface Props {
  name: string;
  id: number;
  deleteItem: (id: number) => void;
}

const Ingredient = ({ name, id, deleteItem }: Props) => {
  return (
    <div className='item-object'>
      <span>{name}</span>
      <button onClick={() => deleteItem(id)}>
        <IoIcons.IoCloseCircle />
      </button>
    </div>
  );
};

export default Ingredient;
