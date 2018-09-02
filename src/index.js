/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createStore, { history } from './store';
import App from './containers/AppContainer';

export const store = createStore();

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component/>
      </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
};

render(App);
