// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Bluebird from 'bluebird';
import { Provider } from 'react-redux';

// Routes
import AppRoutes from './routes';

// Redux
import configureStore from './lib/configureStore';

// Reducers
import rootReducer from './reducers';

// Assets
import './index.css';

// Bluebird configuration
window.Promise = Bluebird;
Bluebird.config({ warnings: false });

window.addEventListener('unhandledrejection', error => {
  error.preventDefault();

  if (process.env.NODE_ENV !== 'production') {
    console.warn('Unhandled promise rejection warning.', error.detail); // eslint-disable-line no-console
  }
});

// Configuring redux store
const store = configureStore({
  initialState: window.initialState
}, rootReducer);

render(
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
