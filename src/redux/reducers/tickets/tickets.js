import { GET_SEARCH_ID, LOADING, LOADING_FALSE, ERROR_ON, SHOW_MORE, UPDATE_TICKETS_LIST } from '../../types'

const ticketsState = {
  tickets: [],
  searchId: null,
  isLoading: true,
  isError: false,
  counter: 5,
}

export const tickets = (state = ticketsState, action) => {
  switch (action.type) {
    case GET_SEARCH_ID:
      return { ...state, searchId: action.searchId }
    case UPDATE_TICKETS_LIST:
      return { ...state, tickets: [...state.tickets, ...action.payload] }
    case LOADING:
      return { ...state, isLoading: true }
    case LOADING_FALSE:
      return { ...state, isLoading: false }
    case ERROR_ON:
      return { ...state, isError: action.err.message }
    case SHOW_MORE:
      return { ...state, counter: state.counter + 5 }
    default:
      return state
  }
}
