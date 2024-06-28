import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CreateRecipe, Recipes } from './pages';
import './assets/styles/global.css';

function App() {
  // Scroll to top of page when changing routes
  // https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <div className='app'>
      <div className='main-container'>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<CreateRecipe />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/search' element={<CreateRecipe />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
