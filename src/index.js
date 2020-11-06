import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/App';
import { Suspense, lazy } from 'react';
const App = lazy(() => import('./components/App'));


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);