import React from 'react'
import ReactDOM from 'react-dom/client'
import { CMSNoticias } from './CMSNoticias.jsx'
import './sass/app.scss';
import { Provider } from 'react-redux';
import { store } from './modules/store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <CMSNoticias />
    </Provider>
  </React.StrictMode>,
)
