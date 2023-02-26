import React from 'react'
import { sortBy } from 'lodash'
import { useSelector } from 'react-redux'
import classes from './ticket-list.module.scss'
import Ticket from '../ticket/ticket'
import ShowMore from '../ShowMore/show-more'
 
function TicketList() {
    const { tickets, countToView } = useSelector((state) => state.tickets)
   
    const filters = useSelector((state) => {
      return Object.values(state.transfer).reduce((newArr, item) => {
        if (item.transfers !== undefined && item.isChecked) {
          newArr.push(item.transfers)
        }
        return newArr
      }, [])
    })
    const filtrArr = tickets.filter((el) => {
      return el.segments[0].stops.length === el.segments[1].stops.length && filters.includes(el.segments[0].stops.length)
    })

    const selected = useSelector((state) => {
      return state.sort
    })

    const sortArr = sortBy(filtrArr, [
      (o) => {
        return selected === 'fastest' ? o.segments[0].duration + o.segments[1].duration : o.price
      },
    ])
  
    const arrToView = sortArr.slice(0, countToView)
    return (
      <>
        <ul className={classes['ticket-list']}>
          {arrToView.map((ticket, index) => (
            <Ticket key={index} ticket={ticket} />
          ))}
        </ul>
        {arrToView.length ? <ShowMore /> : <span>Рейсов, подходящих под заданные фильтры, не найдено</span>}
      </>
    )
  }
  
  export default TicketList