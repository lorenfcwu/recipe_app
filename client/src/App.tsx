import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CreateRecipe, Recipes } from './pages';
import { Navbar } from './components';

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
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/add-recipe' element={<CreateRecipe />} />
          <Route path='/all-recipes' element={<Recipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
