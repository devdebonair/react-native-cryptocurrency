import { Platform } from 'react-native';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import devTools from 'remote-redux-devtools';
import logger from 'redux-logger';
import { middleware as reduxPackMiddleware } from 'redux-pack';

import RootReducer from './reducers';

const middleware = applyMiddleware(reduxPackMiddleware, logger);

const Store = createStore(
  RootReducer,
  compose(
    middleware,
    devTools({
      name: Platform.OS,
      hostname: "localhost",
      port: 5678
    })
  )
)

export default Store;