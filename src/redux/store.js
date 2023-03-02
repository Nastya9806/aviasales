import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, createStore, applyMiddleware } from 'redux'

import { transfer } from './reducers/filterTransfer/filterTransfer'
import { tickets } from './reducers/tickets/tickets'
import { sort } from './reducers/sortTabs/sortTabs'

const rootReducer = combineReducers({
  transfer,
  tickets,
  sort,
})

const middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
