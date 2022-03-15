import React from 'react'
import { ProgressBar as Bar } from 'react-bootstrap';

export default function ProgressBar({ reached, total }) {
  //TODO receive it as props
  const goal = total;
  const achieved = reached;

  const now = achieved > goal ? 100 : achieved / goal * 100;

  return (
    <Bar>
      <Bar striped now={ now } key={1} label={`R$${achieved.toFixed(2)} / R$${goal.toFixed(2)}`} />
      <Bar striped variant='info' now={ now === 100 ? 0 : 100 - now } key={2}/>
    </Bar>
  )
}
