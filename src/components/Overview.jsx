import React, { useEffect, useState } from 'react';
import './Overview.css'

import { useAccounts } from '../context/Context';

export default function Overview() {
  const [totalBalance, setTotalBalance] = useState(0);
  const { accounts } = useAccounts();

  useEffect(() => {
    if (accounts.length > 0) {
      const total = accounts.reduce((acc, curr) => acc + curr.balance, 0)
      setTotalBalance(+total);
    }
  }, [accounts]);

  return (
    <div className='overview-in'>
      <ul className='overview-list'>
        <li className='overview-item'>
          <span>Saldo Total</span>
          <span>R${totalBalance.toFixed(2)}</span>
        </li>
        <li className='overview-item'>
          <span>Receitas</span>
          <span>R$100,00</span>
        </li>
        <li className='overview-item'>
          <span>Despesas</span>
          <span>R$52,00</span>
        </li>
      </ul>
    </div>
  );
}
