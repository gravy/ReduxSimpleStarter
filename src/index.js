import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(ReduxThunk),
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
