import {SELECT, SELECT_ALL, FILTER_ALL_OFF} from '../../types'

const initialState = {
    all: { label: 'Все', isChecked: true },
    none: { label: 'Без пересадок', transfers: 0, isChecked: true },
    one: { label: '1 пересадка', transfers: 1, isChecked: true },
    two: { label: '2 пересадки', transfers: 2, isChecked: true },
    three: { label: '3 пересадки', transfers: 3, isChecked: true },
  }
  
  const returnIsChecked = (state, value) => {
    return {
      ...state,
        all: { ...state.all, isChecked: value },
        none: { ...state.none, isChecked: value },
        one: { ...state.one, isChecked: value },
        two: { ...state.two, isChecked: value },
        three: { ...state.three, isChecked: value },
    }
  }
  export const transfer = (state = initialState, action) => {
  switch(action.type) {
    case SELECT:
      return {
        ...state,
        [action.selectedKey]: {
          ...state[action.selectedKey],
          isChecked: !state[action.selectedKey].isChecked
        },
        all: {...state.all, isChecked: false}
      }
    case SELECT_ALL:
      return returnIsChecked(state, true)
  
    case FILTER_ALL_OFF: 
    return returnIsChecked(state, false)
  
    default:
      return state
  }
  
  }