import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


if(navigator.serviceWorker){
  navigator.serviceWorker.register('serviceWorker.js').catch(err => console.error('service worker NON enregistré', err));
}

