import React from 'react';

import ReactDOM from 'react-dom';
import './index.scss';
import { 
  BrowserRouter, 
  Routes,
  Route 
} from "react-router-dom";
import Main from './pages/main/Main';
import Home from './pages/home/Home';
import Favorites from './pages/favorites/Favorites';
import HeroDetails from './pages/details/HeroDetails';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/details" element={<HeroDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

