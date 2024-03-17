import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import store from "./appState/store";
import { Provider } from 'react-redux';
import { Form } from './Form';
import { MockServer } from './Server';
import { Home } from "./Home"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

MockServer()

root.render(

 <Router >
  <Provider store={store}>
  <Routes>
      <Route path = "/" element={<Form />} />
      <Route path = "/diaries" element = {<Home />} />
    </Routes>
  </Provider>
 </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
