import React, { useState } from 'react';
import '../assets/styles/navbar.css';
import { IconContext } from 'react-icons';
import { useMediaQuery } from 'react-responsive';
import { Header, Sidebar } from './index';

const Navbar = () => {
  const [sidebar, setSidebar] = useState<boolean>(true);
  const isMobileScreen = useMediaQuery({ query: '(max-width: 768px)' });

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <IconContext.Provider value={{ color: 'black' }}>
      <Header mobileScreen={isMobileScreen} toggleSidebar={showSidebar} />
      <Sidebar mobileScreen={isMobileScreen} toggleSidebar={showSidebar} sidebar={sidebar} />
    </IconContext.Provider>
  );
};

export default Navbar;
