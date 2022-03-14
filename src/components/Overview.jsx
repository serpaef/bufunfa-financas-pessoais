import React, { useEffect, useState } from 'react';
import './Overview.css'

import { useAccounts, useTransactions } from '../context/Context';

const RECEIPT = 1;
const EXPENSE = 2;

export default function Overview() {
  const [totalBalance, setTotalBalance] = useState(0);
  const [totalReceipt, setTotalReceipt] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const { accounts } = useAccounts();
  const { transactions } = useTransactions();

  useEffect(() => {
    if (accounts.length > 0) {
      const total = accounts.reduce((acc, curr) => acc + curr.balance, 0);
      setTotalBalance(total);
    }
  }, [accounts]);

  useEffect(() => {
    if(transactions.length > 0) {
      const receipt = transactions.reduce((acc, curr) => {
        if(curr.transactionType.id === RECEIPT) {
          return acc + curr.value;
        }
        return acc;
      }, 0);

      const expense = transactions.reduce((acc, curr) => {
        if(curr.transactionType.id === EXPENSE) {
          return acc + curr.value;
        }
        return acc;
      }, 0);

      setTotalReceipt(receipt);
      setTotalExpenses(expense);
    }
  }, [transactions]);

  return (
    <div className='overview-in'>
      <ul className='overview-list'>
        <li className='overview-item'>
          <span>Saldo Total</span>
          <span>R${totalBalance.toFixed(2)}</span>
        </li>
        <li className='overview-item'>
          <span>Receitas</span>
          <span>R${totalReceipt.toFixed(2)}</span>
        </li>
        <li className='overview-item'>
          <span>Despesas</span>
          <span>R${totalExpenses.toFixed(2)}</span>
        </li>
      </ul>
    </div>
  );
}
