import { createStore, applyMiddleware } from 'redux';
import { pipe } from 'rambda';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from './modules';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = pipe(
  ...enhancers,
  applyMiddleware(...middleware),
);

const configureStore = () => {
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers,
  );

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./modules', () => {
        store.replaceReducer(connectRouter(history)(rootReducer));
      });
    }
  }
  return store;
};

export default configureStore;
