import { Item } from '../components/Form';
import { SetStateAction, Dispatch } from 'react';

const useFormDelete = (listValues: Item[], setListValues: Dispatch<SetStateAction<Item[]>>) => {
  const handleDelete = (id: number) => {
    setListValues(listValues.filter((item) => item.id !== id));
  };

  return { handleDelete, listValues };
};
export default useFormDelete;
