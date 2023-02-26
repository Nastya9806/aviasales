import { LOAD_TICKETS, GET_SEARCH_ID, LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF, ERROR_ON, SHOW_MORE } from '../../types'

const initialState = {
  tickets: [],
  searchId: null,
  isLoading: true,
  isError: false,
  isStop: false,
  countToView: 5,
}

export const tickets = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TICKETS:
      return { ...state, tickets: [...state.tickets, ...action.data.tickets], isStop: action.data.stop }
    case GET_SEARCH_ID:
      return { ...state, searchId: action.searchId }
    case SHOW_MORE:
      return { ...state, countToView: state.countToView + 5 }
    case LOADER_DISPLAY_ON:
      return { ...state, isLoading: true }
    case LOADER_DISPLAY_OFF:
      return { ...state, isLoading: false }
    case ERROR_ON:
      return { ...state, isError: action.err.message }
    default:
      return state
  }
}