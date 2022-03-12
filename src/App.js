import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Dashboard, Transactions, Config, Goals, NotFound } from './pages';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/goals' element={<Goals />} />
          <Route path='/config' element={<Config />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
