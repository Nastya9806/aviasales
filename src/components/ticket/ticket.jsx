import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import FlightInfo from '../flight-info/flight-info'

import classes from './ticket.module.scss'

function Ticket({ ticket }) {
  const { price, carrier, segments } = ticket

  return (
    <li key={uuidv4()} className={classes.ticket}>
      <div className={classes.ticket__header}>
        <span className={classes.ticket__price}>{price}</span>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="Logo avia company" />
      </div>
      <ul>
        <FlightInfo segments={segments} />
      </ul>
    </li>
  )
}

export default Ticket
