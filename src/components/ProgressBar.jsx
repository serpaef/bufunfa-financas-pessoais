import React from 'react'
import { ProgressBar as Bar } from 'react-bootstrap';

export default function ProgressBar() {
  //TODO receive it as props
  const goal = 10000;
  const achieved = 4650.63;

  const now = achieved / goal * 100;
  
  return (
    <Bar>
      <Bar striped now={ now } label={`R$${achieved.toFixed(2)} / R$${goal.toFixed(2)}`} key={1} />
      <Bar striped variant='info' now={ 100 - now } key={2}/>
    </Bar>
  )
}
