import React from 'react'

import classes from '../flight-info/flight-info.module.scss'

function FlightRows({ header, field }) {
  return (
    <div className={classes['ticket-info']}>
      <span className={classes['ticket-info__header']}>{header}</span>
      <span className={classes['ticket-info__field']}>{field}</span>
    </div>
  )
}

export default FlightRows
