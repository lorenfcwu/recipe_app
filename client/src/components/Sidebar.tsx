import { Link } from 'react-router-dom';
import { sidebarData } from '../data/sidebarData';

const Sidebar = () => {
  return (
    <>
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
    </>
  );
};

export default Sidebar;
