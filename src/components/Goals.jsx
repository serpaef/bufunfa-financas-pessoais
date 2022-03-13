import React from 'react';
import ProgressBar from './ProgressBar';
import './Goals.css';

export default function Goals() {
  return (
    <div className='goal-in'>
      <ul className='goal-list'>
        <li className='goal-item'>
          <span>Meta 1</span>
          <span className='progress-bar-span'>
            <ProgressBar />
          </span>
          <span>01/01/1900</span>
        </li>
        <li className='goal-item'>
          <span>Meta 1</span>
          <span className='progress-bar-span'>
            <ProgressBar />
          </span>
          <span>01/01/1900</span>
        </li>
        <li className='goal-item'>
          <span>Meta 1</span>
          <span className='progress-bar-span'>
            <ProgressBar />
          </span>
          <span>01/01/1900</span>
        </li>
        <li className='goal-item'>
          <span>Meta 1</span>
          <span className='progress-bar-span'>
            <ProgressBar />
          </span>
          <span>01/01/1900</span>
        </li>
        <li className='goal-item'>
          <span>Meta 1</span>
          <span className='progress-bar-span'>
            <ProgressBar />
          </span>
          <span>01/01/1900</span>
        </li>
      </ul>
    </div>
  );
}
