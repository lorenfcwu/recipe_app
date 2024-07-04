interface Props {
  name: string;
  id: number;
  deleteItem: (id: number) => void;
}

const Ingredient = ({ name, id, deleteItem }: Props) => {
  return (
    <div className='item-object'>
      <h1>{name}</h1>
      <button onClick={() => deleteItem(id)}>X</button>
    </div>
  );
};

export default Ingredient;
