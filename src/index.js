// Import of must-have React stuff + My app
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// Here our site/app is rendered. All stuff is included in APP, so it's not a lot!
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// I don't really know what this is, but it has something to do with performance, and deleting it gives me a fatal error
reportWebVitals();