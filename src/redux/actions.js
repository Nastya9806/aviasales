import { Aviasales } from '../services/aviasales'

import {
  SELECT,
  SELECT_ALL,
  FILTER_ALL_OFF,
  SORT,
  GET_SEARCH_ID,
  LOADING,
  LOADING_FALSE,
  ERROR_ON,
  SHOW_MORE,
  UPDATE_TICKETS_LIST,
} from './types'

export const select = (key, filtersObj) => {
  if (key === 'all' && filtersObj[key].isChecked) {
    return { type: FILTER_ALL_OFF }
  }
  if (key === 'all' && !filtersObj[key].isChecked) {
    return { type: SELECT_ALL }
  }
  if (
    key !== 'all' &&
    !filtersObj[key].isChecked &&
    Object.values(filtersObj).filter((obj) => obj.isChecked).length === 3
  ) {
    return { type: SELECT_ALL }
  }
  return {
    type: SELECT,
    selectedKey: key,
  }
}

export function sortCheap() {
  return {
    type: SORT,
    order: 'cheapest',
  }
}

export function sortFast() {
  return {
    type: SORT,
    order: 'fastest',
  }
}

export function sortOptimal() {
  return {
    type: SORT,
    order: 'optimal',
  }
}

function isLoading() {
  return {
    type: LOADING,
  }
}

function isNotLoading() {
  return {
    type: LOADING_FALSE,
  }
}

export const showMore = () => ({
  type: SHOW_MORE,
})

function errorOn(err) {
  return {
    type: ERROR_ON,
    err,
  }
}

export function getSearchId() {
  return async (dispatch) => {
    try {
      const searchId = await Aviasales.getSearchId()
      if (searchId) {
        dispatch({
          type: GET_SEARCH_ID,
          searchId,
        })
      }
    } catch (err) {
      dispatch(errorOn(err))
    }
  }
}

export const updateTicketsList = (newCounter) => {
  return {
    type: UPDATE_TICKETS_LIST,
    payload: newCounter,
  }
}

export function loadTickets(searchId) {
  return async (dispatch) => {
    dispatch(isLoading())
    try {
      await Aviasales.getTickets(searchId).then((res) => {
        dispatch(updateTicketsList(res.tickets))
        if (res.stop) {
          dispatch(isNotLoading())
        }
      })
      dispatch(isNotLoading())
    } catch (err) {
      errorOn(err)
    }
  }
}
