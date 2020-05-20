import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faPhone, faPaperPlane} from '@fortawesome/free-solid-svg-icons';

import './App.scss';

import NavMenu from './components/nav-menu/nav-menu.component';
import HomePage from './pages/Home/Homepage.component';
import Footer from './components/footer/footer.component';

library.add(fab, faMapMarker, faPhone, faPaperPlane);

const App = () => (
  <div>
    <nav>
      <NavMenu />
    </nav>
    <HomePage />
    <footer>
      <Footer/>
    </footer>
  </div>
);

export default App;
