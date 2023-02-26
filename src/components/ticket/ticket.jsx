import React from 'react'
import classes from './ticket.module.scss'
import FlightInfo from '../flight-info/flight-info'
import { useSelector } from 'react-redux'
import { add, format } from 'date-fns'
import PropTypes from 'prop-types'

function Ticket({ ticket }) {
  const labels = useSelector((state) => Object.values(state.transfer))
  const { price, carrier, segments } = ticket
  const [to, back] = segments

  const formatTime = (int) => {
    const hours = Math.floor(int / 60)
    const min = int % 60
    return `${hours}ч ${min}м`
  }

  const twoTime = (time, interval) => {
    const toTime = new Date(time)
    const inTime = add(toTime, { minutes: interval })
    return `${format(toTime, 'kk:mm')} - ${format(inTime, 'kk:mm')}`
  }

  const titleCountTransfer = (count) => {
    const label = labels.filter((el) => el.transfers === count)
    return label[0].label
  }

  const row = (direction) => (
    <>
      <FlightInfo
        field={twoTime(direction.date, direction.duration)}
        header={`${direction.origin} - ${direction.destination}`}
      />
      <FlightInfo field={formatTime(direction.duration)} header="В пути" />
      <FlightInfo field={direction.stops.join(', ')} header={titleCountTransfer(direction.stops.length)} />
    </>
  )

  return (
    <li className={classes.ticket}>
      <div className={classes.ticket__header}>
        <span className={classes.ticket__price}>{price}</span>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="Logo avia company" />
      </div>
      <div className={classes.ticket__fields}>
        {row(to)}
        {row(back)}
      </div>
    </li>
  )
}

Ticket.propTypes = {
  ticket: PropTypes.shape({
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
}

export default Ticket