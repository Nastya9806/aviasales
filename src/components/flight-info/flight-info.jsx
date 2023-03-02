import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import FlightRows from '../flight-rows'
import { formatDurationTime, showDepartureArrival } from '../../utilities/date'

import classes from './flight-info.module.scss'

function FlightInfo({ segments }) {
  const transfersState = useSelector((state) => state.transfer)

  const stopsLabel = (count) => {
    const current = Object.values(transfersState).filter((el) => el.transfers === count)[0].label
    return current
  }

  const showInfoTable = () => {
    return segments.map((item) => {
      return (
        <li key={uuidv4()} className={classes['ticket-info__fields']}>
          <FlightRows
            field={showDepartureArrival(item.date, item.duration)}
            header={`${item.origin} - ${item.destination}`}
          />
          <FlightRows field={formatDurationTime(item.duration)} header="В пути" />
          <FlightRows field={item.stops.join(', ')} header={stopsLabel(item.stops.length)} />
        </li>
      )
    })
  }
  return <>{showInfoTable()}</>
}

export default FlightInfo
