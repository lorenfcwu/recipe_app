import '../assets/styles/navbar.css';
import '../assets/styles/sectionWrapper.css';
import '../assets/styles/sidebarMenu.css';

import { IconContext } from 'react-icons';
import { useMediaQuery } from 'react-responsive';
import { Header, Sidebar } from './index';
import { useToggle } from '../hooks';

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

const SectionWrapper = ({ children, title }: Props) => {
  const { state: sidebar, toggle } = useToggle(true);
  const isMobileScreen = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div className='section-outer'>
      <IconContext.Provider value={{ color: 'black' }}>
        {isMobileScreen && <Header mobileScreen={isMobileScreen} toggleSidebar={toggle} />}
        <Sidebar mobileScreen={isMobileScreen} toggleSidebar={toggle} sidebar={sidebar} />
      </IconContext.Provider>
      <div className='section-content'>
        <span className='section-title'>{title}</span>
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
