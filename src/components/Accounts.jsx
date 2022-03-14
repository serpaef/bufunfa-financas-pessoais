import React, { useEffect } from 'react';
import './Accounts.css';

import { useAccounts } from '../context/Context';

export default function Accounts() {
  const { accounts } = useAccounts();

  useEffect(() => {}, [accounts]);

  return (
    <div className='account-in'>
      <ul className='account-list'>
        {!accounts.length > 0
          ? ''
          : accounts.map((account, index) => {
              return (
                <li className='account-item' key={index}>
                  <span>{account.name}</span>
                  <span>{`R$${account.balance.toFixed(2)}`}</span>
                </li>
              );
            })}
      </ul>
    </div>
  );
}
