import React from 'react';
import './Overview.css'

export default function Overview() {
  return (
    <div className='overview-in'>
      <ul className='overview-list'>
        <li className='overview-item'>
          <span>Saldo Total</span>
          <span>R$48,00</span>
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
