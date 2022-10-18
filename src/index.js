import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {onKeyUp} from "./context/WordleContext";

// document.addEventListener("keyup", event => {
//     let pressedKey = String(event.key)
//     onKeyUp(pressedKey)
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
