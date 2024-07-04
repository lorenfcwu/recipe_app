import { NavLink } from 'react-router-dom';
import { sidebarData } from '../data/sidebarData';

const SidebarMenu = () => {
  return (
    <>
      {sidebarData.map((element, id) => {
        return (
          <div className='sidebar-menu-container'>
            <li key={id} className='sidebar-object'>
              <NavLink to={element.path}>
                {element.icon}
                <span>{element.title}</span>
              </NavLink>
            </li>
            <div className='sidebar-menu-selector' key={id} />
          </div>
        );
      })}
    </>
  );
};

export default SidebarMenu;
