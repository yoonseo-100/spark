import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18부터는 'react-dom/client' 사용
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; // Redux Provider 추가
import reducers from './reducers';

const store = createStore(reducers);
const root = ReactDOM.createRoot(document.getElementById('root')); // 새로운 root 생성

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
