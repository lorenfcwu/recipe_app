import { Item } from '../components/Form';
import { SetStateAction, Dispatch } from 'react';

const useFormAddDelete = (newValue: string, listValues: Item[], setListValues: Dispatch<SetStateAction<Item[]>>) => {
  const handleSubmit = () => {
    const newItem: Item = {
      name: newValue,
      id: listValues.length === 0 ? 1 : listValues[listValues.length - 1].id + 1,
    };
    setListValues([...listValues, newItem]);
  };

  const handleDelete = (id: number) => {
    setListValues(listValues.filter((item) => item.id !== id));
  };

  return { handleSubmit, handleDelete, listValues };
};

export default useFormAddDelete;
