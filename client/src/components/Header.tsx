import { Link } from 'react-router-dom';
import * as FaIcons6 from 'react-icons/fa6';
import logo from '../assets/images/recipe-app-logo.png';

interface Props {
  mobileScreen: boolean;
  toggleSidebar: any;
}

const Header = ({ mobileScreen, toggleSidebar }: Props) => {
  return (
    <>
      <div className='header'>
        {mobileScreen && (
          <>
            <Link to='#' className='sidebar-toggle-icon'>
              <FaIcons6.FaBars onClick={toggleSidebar} />
            </Link>
            <div className='header-logo'>
              <img src={logo} alt='logo' className='logo' />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
