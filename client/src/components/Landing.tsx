import '../assets/styles/landing.css';
import img1 from '../assets/images/how-to-1.png';
import img2 from '../assets/images/how-to-2.png';
import img3 from '../assets/images/how-to-3.png';
import img4 from '../assets/images/how-to-4.png';
import img5 from '../assets/images/how-to-5.png';
import img6 from '../assets/images/how-to-6.png';

const Landing = () => {
  return (
    <div className='landing-container'>
      <h3>About</h3>
      <p>
        This page stems from a personal passion for cooking and a desire to make finding new recipes easier and more enjoyable. As
        someone who loves experimenting with different ingredients and discovering new dishes, this app aims to make the search
        effortless. Just enter the ingredient or dish you're interested in, and let it spark your next culinary creation.
        <br />
        <br />
        Currently powered by the Forkify API, I envision expanding the application to incorporate my own database and queries,
        providing greater versatility and personalization. My ultimate goal is to enable users to combine multiple
        ingredients—functionality that is not currently supported by the Forkify API—and retrieve recipes that include all
        specified ingredients. This vision is the driving force behind the application’s name, <mark>Fridge to Feast</mark>.
      </p>
      <h3>How to use</h3>
      <div className='landing-tutorial-container'>
        <p>
          First, navigate to <mark>Search</mark> page
        </p>
        <img src={img1} alt='how-to-1' />
        <p>
          Then enter the ingredient you want to cook. Be sure to choose from the suggested options in the dropdown while typing.
        </p>
        <img src={img2} alt='how-to-2' />
        <p>
          Click <mark>Add Item</mark> and confirm it appears on the <mark>Ingredients</mark> tab on the right
        </p>
        <img src={img3} alt='how-to-3' />
        <p>
          Click the <mark>Search</mark> button and the matching recipes will be displayed below.
        </p>
        <img src={img4} alt='how-to-4' />
        <p>
          To view a recipe of interest, click the <mark>View Recipe</mark> button. This will open a Google search page, where you
          can navigate to the first result for the recipe details.
        </p>
        <div>
          <img src={img5} alt='how-to-5' />
          <img src={img6} alt='how-to-6' />
        </div>
      </div>

      <h3>API reference</h3>
      <p>https://forkify-api.herokuapp.com/v2</p>
    </div>
  );
};

export default Landing;
