import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/app.css';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home />} />
        < Route path='/about' element={< About />} />
        < Route path='/search' element={< Search />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
