import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RosterReducer from './reducers/rosterReducer'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

if(localStorage.getItem('roster') == null)
  localStorage.setItem('roster', JSON.stringify([]))
let initialState = {
  currentIndex: -1,
  list: JSON.parse(localStorage.getItem('roster'))
}
const store = createStore(RosterReducer, initialState)



ReactDOM.render(  
  
  <Auth0Provider 
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  > 
    <Provider store={store}> 
      <App />
    </Provider>
  </Auth0Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
