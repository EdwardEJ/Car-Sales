import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { featureReducer } from './reducers/featureReducer'

import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';

//STORE -> GLOBALIZED STATE
const store = createStore(featureReducer);


const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>
  , rootElement
);
