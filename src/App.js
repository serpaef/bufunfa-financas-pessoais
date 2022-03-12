import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Transactions, Config, Goals, NotFound } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/goals' element={<Goals />} />
        <Route path='/config' element={<Config />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
