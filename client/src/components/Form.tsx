import { SetStateAction, Dispatch } from 'react';
import { Ingredient, AutocompleteText } from './index';
import { useFormInput, useFormAddDelete } from '../hooks';
import '../assets/styles/form.css';
import axios from 'axios';
// import * as IoIcons from 'react-icons/io5';

interface Props {
  listItems: Item[];
  setListItems: Dispatch<SetStateAction<Item[]>>;
  recipes: any[];
  setRecipes: Dispatch<SetStateAction<any[]>>;
}

export interface Item {
  name: string;
  id: number;
}

const Form = ({ listItems, setListItems, recipes, setRecipes }: Props) => {
  const ingredient = useFormInput('');
  const { handleDelete: deleteItem, listValues: listIngredients } = useFormAddDelete(ingredient.value, listItems, setListItems);

  /**
   * builds the search url to be called to forkify api
   * @param ingredient the ingredient to be queried on
   */
  const buildSearchURL = (ingredient: string): string => {
    return `https://forkify-api.herokuapp.com/api/v2/recipes?search=${encodeURIComponent(ingredient)}`;
  };

  const fetchRecipes = async () => {
    const allRecipes: any[] = [];

    try {
      const promises = listIngredients.map((ingredient) => {
        const searchURL = buildSearchURL(ingredient.name);
        return axios.get(searchURL);
      });

      const results = await Promise.all(promises);

      results.forEach((response) => {
        const data = response.data;
        if (data.data.recipes) {
          allRecipes.push(...data.data.recipes);
        }
      });

      const uniqueRecipes = Array.from(new Set(allRecipes.map((recipe) => recipe.id))).map((id) =>
        allRecipes.find((recipe) => recipe.id === id)
      );

      setRecipes(uniqueRecipes);
    } catch (err) {
      console.error('Error fetching recipes: ', err);
    }
  };

  return (
    <div className='form-container'>
      <div className='form-header-container'>
        <h1 className='form-title'>Search for a Recipe</h1>
      </div>
      <hr />
      <div className='form-body-container'>
        <div className='form-search-container'>
          <AutocompleteText listItems={listItems} setListItems={setListItems} />
          <div className='form-filter-container'>
            {/* to be added later with filter functionality */}
            {/* <button className='filter-search'>
              <IoIcons.IoFilter />
            </button> */}
            <button className='form-button' onClick={fetchRecipes}>
              Search
            </button>
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
