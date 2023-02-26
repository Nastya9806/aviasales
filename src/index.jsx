import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
// import { createStore, applyMiddleware, compose } from 'redux';
import './index.scss';
import App from './components/app/App';
// import store from './redux/store'
// import reducer from './redux/reducers/reducers'
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk'
import store from './redux/store'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
// store.subscribe(() => console.log(store.getState()));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store ={store}>
    <App />
  </Provider>
);


