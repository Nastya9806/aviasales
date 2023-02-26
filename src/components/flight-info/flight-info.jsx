import React from 'react'
import PropTypes from 'prop-types'
import classes from './flight-info.module.scss'

function FlightInfo({ header, field }) {
  return (
    <div className={classes['ticket-info']}>
      <span className={classes['ticket-info__header']}>{header}</span>
      <span className={classes['ticket-info__field']}>{field}</span>
    </div>
  )
}

FlightInfo.propTypes = {
  header: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
}

export default FlightInfo