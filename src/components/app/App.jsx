import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTickets, getSearchId } from '../../redux/actions'
import classes from './App.module.scss'
import Filters from '../filters/filters'
import TabsFilters from '../tabs-filter/tabs-filter'
import TicketList from '../ticket-list/ticket-list'

function App() {
  const dispatch = useDispatch()
  const { searchId, isLoading, isError } = useSelector((state) => state.tickets)

  useEffect(() => {
    dispatch(getSearchId())
  }, [])

  useEffect(() => {
    if (typeof searchId === 'string') {
      dispatch(loadTickets(searchId))
    }
  }, [searchId])

  return(
<div className={classes.app}>
      <div className={classes.app__wrapper}>
        <aside className={classes.app__aside}>
          <Filters />
        </aside>
        <main className={classes.app__main}>
          <TabsFilters />
          <TicketList />
        </main>
      </div>
    </div>
  )
  
}

export default App