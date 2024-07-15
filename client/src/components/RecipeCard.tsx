import '../assets/styles/recipeCard.css';
import { NavLink } from 'react-router-dom';

interface Props {
  image: string;
  title: string;
  id: number;
}

const path = '/recipe';

const visitRecipe = (id: number) => {};

const RecipeCard = ({ image, title, id }: Props) => {
  return (
    <div className='recipe-card'>
      <img src={image} alt='icon' className='recipe-image' />
      <div className='recipe-body-container'>
        <h2> {title} </h2>
        <NavLink to={path + '/' + id}>
          <button onClick={() => visitRecipe(id)}> View Recipe </button>
        </NavLink>
      </div>
    </div>
  );
};

export default RecipeCard;
