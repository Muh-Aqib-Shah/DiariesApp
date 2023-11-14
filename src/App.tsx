import { Provider } from 'react-redux';
import './App.css';
import store from "./app/store"
import { Diary } from './Diary/Dairy';
import { LoginForm } from './Login';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div className='appbar'>Diaries</div>
      <LoginForm type="signup" />
    </div>
    </Provider>
  );
}

export default App;
