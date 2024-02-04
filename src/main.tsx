import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize/modern-normalize.css';

import App from './App.tsx'
import {store} from './redux'
import GlobalStyles from './styles/GlobalStyles.ts';
import { persistor } from './redux/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <BrowserRouter basename="/">
   <Provider store={store}>
    <Global styles={GlobalStyles}/>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
   </Provider>
   </BrowserRouter>
  </React.StrictMode>,
)
