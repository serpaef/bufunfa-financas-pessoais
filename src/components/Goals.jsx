import React, { useEffect } from 'react';
import ProgressBar from './ProgressBar';
import './Goals.css';

import { useGoals } from '../context/Context';

export default function Goals() {
  const { goals } = useGoals();

  useEffect(() => {}, [goals]);

  return (
    <div className='goal-in'>
      <ul className='goal-list'>
        {!goals.length > 0
          ? ''
          : goals.map((goal, index) => {
              const { title, deadline, valueToAchieve, reachedValue } = goal;
              const apiDate = new Date(deadline);
              const date = apiDate.getDate();
              const month = apiDate.getMonth();
              const year = apiDate.getFullYear();
              return (
                <li className='goal-item' key={index}>
                  <span>{title}</span>
                  <span className='progress-bar-span'>
                    <ProgressBar
                      reached={reachedValue}
                      total={valueToAchieve}
                    />
                  </span>
                  <span>{`${date}/${month}/${year}`}</span>
                </li>
              );
            })}
      </ul>
    </div>
  );
}
