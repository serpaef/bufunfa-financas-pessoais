import React, { createContext, useState, useEffect, useContext } from 'react';
import Account from '../services/Account';

const Store = createContext();

export default function Context({ children }) {
  const [accounts, setAccounts] = useState([]);

  async function populate() {
    const apiAccounts = await Account.getAll();
    setAccounts(apiAccounts);
  }

  useEffect(() => {
    populate();
  }, []);

  useEffect(() => {}, [accounts]);

  return (
    <Store.Provider value={{ accounts }}>
      {children}
    </Store.Provider>
  );
}

export function useAccounts() {
  const { accounts } = useContext(Store);
  return { accounts };
}
