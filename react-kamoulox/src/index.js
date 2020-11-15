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
  navigator.serviceWorker.register('/serviceWorker.js')
  .then(function(registration) {
    registration.addEventListener('updatefound', function() {
      var installingWorker = registration.installing;
      console.log('A new service worker is being installed:',
        installingWorker);
    });
  })
  .catch(function(error) {
    console.log('Service worker registration failed:', error);
  });
} else {
  console.log('Service workers are not supported.');
}

