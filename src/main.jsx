import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { NavigatorContextProvider } from './Context/Context.jsx';
import { NavigatorContext2Provider } from './Context2/Context2.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavigatorContextProvider>
      <NavigatorContext2Provider>
        <App />
      </NavigatorContext2Provider>
    </NavigatorContextProvider>
  </React.StrictMode>
);
