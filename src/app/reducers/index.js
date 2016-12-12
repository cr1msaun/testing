import { combineReducers } from 'redux';

import TestingReducer from './testing';
import AppReducer from './app';

const rootReducer = combineReducers({
  app: AppReducer,
  testing: TestingReducer
});

export default rootReducer;
