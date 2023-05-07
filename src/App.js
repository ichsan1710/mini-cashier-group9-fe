import React from 'react';
import LoginPage from './pages/logInPage'
import TransPage from './pages/transPage'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
      <Route path = '/' element={<LoginPage/>} />
      <Route path = '/trans' element={<TransPage/>} />
      </Routes>
    </div>
  );
}

export default App;