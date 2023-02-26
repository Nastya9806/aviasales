// import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { reducer } from './reducers'
// // import { TicketsReducer } from './redusers/TickersReducer'
// // import { TabsReducer } from './redusers/TabsReducer'

// const rootReducer = combineReducers({
//   reducer,
// //   TicketsReducer,
// //   TabsReducer,
// })

// const middleware = [thunk]

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

// export default store

import { combineReducers, createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
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