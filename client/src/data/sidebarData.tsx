import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const sidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'sidebar-object',
  },
  {
    title: 'Recipes',
    path: '/recipes',
    icon: <AiIcons.AiFillBook />,
    cName: 'sidebar-object',
  },
  {
    title: 'Search',
    path: '/search',
    icon: <FaIcons.FaSearch />,
    cName: 'sidebar-object',
  },
];
