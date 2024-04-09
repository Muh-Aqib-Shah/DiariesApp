import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from "./appState/store";
import { Provider } from 'react-redux';
import { Form } from './Form';
import { MockServer } from './Server';
import { Home } from "./Home"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyles';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

MockServer()

root.render(

 <Router >
  <GlobalStyle />
  <Provider store={store}>
  <Routes>
      <Route path = "/" element={<Form />} />
      <Route path = "/diaries" element = {<Home />} />
    </Routes>
  </Provider>
 </Router>
);

reportWebVitals();
