import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import Aos  from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


import App from './App';

import store from './redux/store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <App />
  </ Provider>
);

