import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css';
import { IconContext } from 'react-icons';
import * as FaIcons6 from 'react-icons/fa6';
import { useMediaQuery } from 'react-responsive';
import Sidebar from './Sidebar';
import logo from '../assets/images/recipe-app-logo.png';

const Navbar = () => {
  const [sidebar, setSidebar] = useState<boolean>(true);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1224px)' });

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      {isSmallScreen && (
        <>
          <IconContext.Provider value={{ color: 'black' }}>
            <div className='navbar-container'>
              <div className='navbar'>
                <Link to='#' className='menu-bars'>
                  <FaIcons6.FaBars onClick={showSidebar} />
                </Link>
                <img src={logo} alt='logo' className='logo' />
              </div>

              <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-content'>
                  <li className='nav-toggle'>
                    <Link to='#' className='menu-bars'>
                      <FaIcons6.FaX onClick={showSidebar} />
                    </Link>
                  </li>
                  <Sidebar />
                </ul>
              </nav>
            </div>
          </IconContext.Provider>
        </>
      )}
    </>
  );
};

export default Navbar;
