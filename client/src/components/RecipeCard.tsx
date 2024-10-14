import '../assets/styles/recipeCard.css';

interface Props {
  image: string;
  title: string;
  id: number;
  publisher: string;
}

const RecipeCard = ({ image, title, id, publisher }: Props) => {
  const visitRecipe = () => {
    const query = `${title} ${publisher}`;
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(googleSearchURL, '_blank');
  };

  return (
    <div className='recipe-card'>
      <img src={image} alt='icon' className='recipe-image' />
      <div className='recipe-body-container'>
        <h2> {title} </h2>
        <button onClick={visitRecipe}> View Recipe </button>
      </div>
    </div>
  );
};

export default RecipeCard;
