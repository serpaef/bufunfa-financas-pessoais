import React, { createContext, useState, useEffect, useContext } from 'react';
import Account from '../services/Account';
import Transaction from '../services/Transaction'
import Goal from '../services/Goal';
import Category from '../services/Category';

const Store = createContext();

export default function Context({ children }) {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [goals, setGoals] = useState([]);
  const [categories, setCategories] = useState([]);

  async function populate() {
    const apiAccounts = await Account.getAll();
    const apiTransactions = await Transaction.getAll();
    const apiGoals = await Goal.getAll();
    const apiCategories = await Category.getAll();

    setAccounts(apiAccounts);
    setTransactions(apiTransactions);
    setGoals(apiGoals)
    setCategories(apiCategories);
  }

  useEffect(() => {
    populate();
  }, []);

  useEffect(() => {}, [accounts, transactions]);

  return (
    <Store.Provider value={{ accounts, transactions, goals, categories }}>
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

export function useGoals() {
  const { goals } = useContext(Store);
  return { goals };
}

export function useCategories() {
  const { categories } = useContext(Store);
  return { categories };
}
