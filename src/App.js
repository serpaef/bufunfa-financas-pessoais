import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import {
  Dashboard,
  Transactions,
  Accounts,
  Goals,
  NotFound,
  TransactionTypes,
  TransactionCategories,
} from './pages';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/goals' element={<Goals />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/transaction_types' element={<TransactionTypes />} />
          <Route
            path='/transaction_categories'
            element={<TransactionCategories />}
          />
          <Route path='/' element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
