import React from 'react'
import { useDispatch } from 'react-redux'
import { showMore } from '../../redux/actions'
import classes from './show-more.module.scss'

function ShowMore() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(showMore())
  }

  return (
    <button type="button" className={classes.button} onClick={handleClick}>
      Показать еще 5 билетов!
    </button>
  )
}

export default ShowMore