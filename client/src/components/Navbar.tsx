import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to='/add-recipe'> Add a Recipe </Link>
      <Link to='/all-recipes'> Recipes </Link>
    </div>
  );
};

export default Navbar;
