import React from 'react'
import { sortBy } from 'lodash'
import { useSelector } from 'react-redux'
import { Alert } from 'antd'
import { v4 as uuidv4 } from 'uuid'

import Ticket from '../ticket'
import ShowMore from '../btn-show-more'

import classes from './ticket-list.module.scss'

function TicketList() {
  const { tickets, counter } = useSelector((state) => state.tickets)
  const transferState = useSelector((state) => state.transfer)
  const selected = useSelector((state) => state.sort)

  const getFilteredTransfers = Object.values(transferState).reduce((newArr, i) => {
    if (i.transfers !== undefined && i.isChecked) {
      newArr.push(i.transfers)
    }
    return newArr
  }, [])

  const getSortedTickets = (arrToFilter, transfersArr) => {
    const filteredTickets = arrToFilter.filter((el) => {
      return transfersArr.includes(el.segments[0].stops.length) && transfersArr.includes(el.segments[1].stops.length)
    })

    const sortedData = sortBy(filteredTickets, [
      (i) => {
        const duration = i.segments[0].duration + i.segments[1].duration
        const withoutStops = i.segments[0].stops.length + i.segments[1].stops.length
        if (selected === 'fastest') {
          return duration
        }
        if (selected === 'cheapest') {
          return i.price
        }
        if (selected === 'optimal') {
          return i.price < 20000 && duration ? i.price && withoutStops : null
        }
        if (!selected) {
          return i
        }
      },
    ])
    return sortedData
  }

  const ticketsListArr = getSortedTickets(tickets, getFilteredTransfers).slice(0, counter)

  return (
    <>
      <ul className={classes['ticket-list']}>
        {ticketsListArr.map((ticket) => (
          <Ticket key={uuidv4()} ticket={ticket} />
        ))}
      </ul>
      {ticketsListArr.length >= 5 ? (
        <ShowMore />
      ) : (
        <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="info"></Alert>
      )}
    </>
  )
}

export default TicketList
