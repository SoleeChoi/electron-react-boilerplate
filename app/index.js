import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import configureStore from './configureStore';
import history from './utils/history';

import './app.global.css';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

const MOUNT_NODE = document.getElementById('root');

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  MOUNT_NODE
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      MOUNT_NODE
    );
  });
}
