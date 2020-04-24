import React from 'react';

import './App.scss';

import NavMenu from './components/nav-menu/nav-menu.component';
import HomePage from './pages/Home/Homepage.component';

const App = () => (
  <div>
    <nav>
      <NavMenu />
    </nav>
    <HomePage />
    <footer>
      Copyright
    </footer>
  </div>
);

export default App;
