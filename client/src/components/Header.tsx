import { Link } from 'react-router-dom';
import * as FaIcons6 from 'react-icons/fa6';
import logo from '../assets/images/recipe-app-logo.png';
import '../assets/styles/navbar.css';

interface Props {
  mobileScreen: boolean;
  toggleSidebar: any;
}

const Header = ({ mobileScreen, toggleSidebar }: Props) => {
  return (
    <>
      <div className='header'>
        {mobileScreen && (
          <Link to='#' className='menu-bars'>
            <FaIcons6.FaBars onClick={toggleSidebar} />
          </Link>
        )}
        <img src={logo} alt='logo' className='logo' />
      </div>
    </>
  );
};

export default Header;
