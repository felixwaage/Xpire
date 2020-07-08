import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// Color theme for whole app
const theme = createMuiTheme({
  palette: {
     primary: {
        main: '#C9DEBC',
     },
     secondary: {
       main: '#F96523',
     },
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

if ('serviceWorker' in navigator && "Notification" in window) {
  
  navigator.serviceWorker.register('service-worker.js').then(function(registration) {
    console.log("service worker registered");
    Notification.requestPermission(result => {
      if (result === 'granted') {
        console.log("Granted")
      } else {
        console.log(result)
      }
    });
  }).catch(function(error) {
    console.log(error)
  });
} else {
  // Der verwendete Browser unterstützt Service Worker nicht.
  var aElement = document.createElement('a');
  aElement.href = 'http://www.chromium.org/blink/serviceworker/service-worker-faq';
  aElement.textContent = 'unavailable';
  document.querySelector('#status').appendChild(aElement);
}