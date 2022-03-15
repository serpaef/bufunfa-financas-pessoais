import React, { useEffect } from 'react';
import './ExpensesByCategory.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { useTransactions, useCategories } from '../context/Context';

import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const EXPENSE = 2;

export default function ExpensesByCategory() {
  const { transactions } = useTransactions();
  const { categories } = useCategories();

  useEffect(() => {}, [transactions, categories]);

  const labels = categories.map((category) => category.name);
  let values = [0,0,0,0,0];

  transactions.forEach( transaction => {
    if(transaction.typeId === EXPENSE) {
      values[+transaction.category.id - 1] += transaction.value
    }
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Valor em R$',
        data: values,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(200, 200, 64, 1)',
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <div className='expenses-by-category-list-container'>
      <Doughnut data={data} options={options} />
    </div>
  );
}
