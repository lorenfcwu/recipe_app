import { useState } from 'react';
import '../assets/styles/navbar.css';
import '../assets/styles/sectionWrapper.css';
import '../assets/styles/sidebarMenu.css';

import { IconContext } from 'react-icons';
import { useMediaQuery } from 'react-responsive';
import { Header, Sidebar } from './index';

interface Props {
  children: any;
  title?: string;
}

const SectionWrapper = ({ children, title }: Props) => {
  const [sidebar, setSidebar] = useState<boolean>(true);
  const isMobileScreen = useMediaQuery({ query: '(max-width: 768px)' });

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className='section-outer'>
      <IconContext.Provider value={{ color: 'black' }}>
        {isMobileScreen && <Header mobileScreen={isMobileScreen} toggleSidebar={showSidebar} />}
        <Sidebar mobileScreen={isMobileScreen} toggleSidebar={showSidebar} sidebar={sidebar} />
      </IconContext.Provider>
      <div className='section-content'>
        <span className='section-title'>{title}</span>
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
