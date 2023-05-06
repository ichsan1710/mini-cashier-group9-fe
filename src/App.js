import React from 'react';
import { Routes, Route} from 'react-router-dom'
import AuthField from './components/authField'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Products from './pages/Products';
import Modal from './components/Modal';

function App() {
  return (
    <div>
      <Navbar />
      {/* <AuthField /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;