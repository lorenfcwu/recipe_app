import { Link } from 'react-router-dom';
import * as FaIcons6 from 'react-icons/fa6';
import { sidebarData } from '../data/sidebarData';
import logo from '../assets/images/recipe-app-logo.png';

interface Props {
  mobileScreen: boolean;
  toggleSidebar: any;
  sidebar: boolean;
}

const Sidebar = ({ mobileScreen, toggleSidebar, sidebar }: Props) => {
  return (
    <>
      <div className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
        <ul className='sidebar-menu-content'>
          {mobileScreen && (
            <li className='sidebar-toggle'>
              <Link to='#' className='menu-bars'>
                <FaIcons6.FaX onClick={toggleSidebar} />
              </Link>
            </li>
          )}
          {!mobileScreen && (
            <li className='sidebar-logo'>
              <img src={logo} alt='logo' className='logo' />
            </li>
          )}
          {sidebarData.map((element, idx) => {
            return (
              <li key={idx} className={element.cName}>
                <Link to={element.path}>
                  {element.icon}
                  <span>{element.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <a href='https://github.com/lorenfcwu/recipe_app' className='credits' target='_blank' rel='noreferrer'>
          Created by Loren Wu
        </a>
      </div>
    </>
  );
};

export default Sidebar;
