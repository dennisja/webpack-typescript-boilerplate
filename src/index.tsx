import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const appContainer = document.getElementById('app');

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  appContainer
);
