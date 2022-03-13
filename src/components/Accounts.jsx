import React from 'react';
import './Accounts.css';

export default function Accounts() {
  return (
    <div className='account-in'>
      <ul className='account-list'>
        <li className='account-item'>
          <span>Conta 1</span>
          <span>R$48,00</span>
        </li>
        <li className='account-item'>
          <span>Conta 2</span>
          <span>R$100,00</span>
        </li>
        <li className='account-item'>
          <span>Conta 3</span>
          <span>R$52,00</span>
        </li>
        <li className='account-item'>
          <span>Conta 2</span>
          <span>R$100,00</span>
        </li>
        <li className='account-item'>
          <span>Conta 3</span>
          <span>R$52,00</span>
        </li>
      </ul>
    </div>
  );
}
