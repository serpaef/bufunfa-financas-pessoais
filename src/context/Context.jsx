import React, { createContext, useState, useEffect, useContext } from 'react';
import Account from '../services/Account';
import Transaction from '../services/Transaction'

const Store = createContext();

export default function Context({ children }) {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([])

  async function populate() {
    const apiAccounts = await Account.getAll();
    const apiTransactions = await Transaction.getAll();
    setAccounts(apiAccounts);
    setTransactions(apiTransactions);
  }

  useEffect(() => {
    populate();
  }, []);

  useEffect(() => {}, [accounts, transactions]);

  return (
    <Store.Provider value={{ accounts, transactions }}>
      {children}
    </Store.Provider>
  );
}

export function useAccounts() {
  const { accounts } = useContext(Store);
  return { accounts };
}

export function useTransactions() {
  const { transactions } = useContext(Store);
  return { transactions };
}
