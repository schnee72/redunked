import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './containers/App';
import { saveState } from './utils/localStorage';
import throttle from 'lodash.throttle';

const root = document.getElementById('root');

// only save state once a second at most
store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  root
);
