import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import store from "./app/store";
import { Provider } from 'react-redux';
import { Form } from './Form';
import { MockServer } from './Server';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

MockServer()

console.log("INDEX");
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <Form />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
