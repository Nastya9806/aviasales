import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import Filters from '../filters'
import TabsFilters from '../tabs-filter'
import TicketList from '../ticket-list'
import { loadTickets, getSearchId } from '../../redux/actions'
import Header from '../header'

import classes from './App.module.scss'

function App() {
  const dispatch = useDispatch()
  const { searchId, isLoading, tickets, isError } = useSelector((state) => state.tickets)

  useEffect(() => {
    dispatch(getSearchId())
  }, [])

  useEffect(() => {
    if (searchId) {
      dispatch(loadTickets(searchId))
    }
  }, [searchId])

  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.app__wrapper}>
        <aside className={classes.app__aside}>
          <Filters />
        </aside>
        <main className={classes.app__main}>
          <TabsFilters />
          {isLoading && tickets.length < 5 && !isError ? (
            <Spin
              indicator={
                <LoadingOutlined
                  style={{
                    fontSize: 24,
                  }}
                  spin
                />
              }
            />
          ) : (
            <TicketList />
          )}
        </main>
      </div>
    </div>
  )
}

export default App
