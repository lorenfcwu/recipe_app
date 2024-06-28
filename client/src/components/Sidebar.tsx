import { Link } from 'react-router-dom';
import * as FaIcons6 from 'react-icons/fa6';
import logo from '../assets/images/recipe-app-logo.png';
import { SidebarMenu } from './index';

interface Props {
  mobileScreen: boolean;
  toggleSidebar: any;
  sidebar: boolean;
}

const Sidebar = ({ mobileScreen, toggleSidebar, sidebar }: Props) => {
  return (
    <div className={sidebar ? 'sidebar-container active' : 'sidebar-container'}>
      <ul className='sidebar-content-container'>
        {mobileScreen && (
          <li className='sidebar-toggle'>
            <Link to='#' className='sidebar-toggle-icon'>
              <FaIcons6.FaX onClick={toggleSidebar} />
            </Link>
          </li>
        )}
        {!mobileScreen && (
          <li className='sidebar-logo'>
            <img src={logo} alt='logo' className='logo' />
          </li>
        )}
        <SidebarMenu />
      </ul>

      <a href='https://github.com/lorenfcwu/recipe_app' className='credits' target='_blank' rel='noreferrer'>
        Created by Loren Wu
      </a>
    </div>
  );
};

export default Sidebar;
