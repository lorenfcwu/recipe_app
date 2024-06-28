import { Link } from 'react-router-dom';
import { sidebarData } from '../data/sidebarData';

const SidebarMenu = () => {
  return (
    <>
      {sidebarData.map((element, id) => {
        return (
          <div className='sidebar-menu-container'>
            <li key={id} className={element.title === 'Home' ? 'sidebar-object active' : 'sidebar-object'}>
              <Link to={element.path}>
                {element.icon}
                <span>{element.title}</span>
              </Link>
            </li>
            <div className='sidebar-menu-selector' key={id} />
          </div>
        );
      })}
    </>
  );
};

export default SidebarMenu;
