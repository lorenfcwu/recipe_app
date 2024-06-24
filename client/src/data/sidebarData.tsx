import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const sidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-object',
  },
  {
    title: 'Recipes',
    path: '/recipes',
    icon: <AiIcons.AiFillBook />,
    cName: 'nav-object',
  },
  {
    title: 'Search',
    path: '/search',
    icon: <FaIcons.FaSearch />,
    cName: 'nav-object',
  },
];
