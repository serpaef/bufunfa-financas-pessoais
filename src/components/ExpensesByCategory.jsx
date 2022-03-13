import React from 'react';
import './ExpensesByCategory.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpensesByCategory() {
  const data = {
    labels: [
      'Essenciais',
      'Transporte',
      'Lazer',
      'Educação',
      'Outros',
    ],
    datasets: [
      {
        label: 'Valor em R$',
        data: [100, 55, 83.3, 70, 22],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(200, 200, 64, 1)',
        ]
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right'
      }
    }
  };

  return (
    <div className='expenses-by-category-list-container'>
      <Doughnut data={data} options={options} />
    </div>
  );
}
