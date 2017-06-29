// Dependencies
import { combineReducers } from 'redux';

// Apps Reducers
import library from '../containers/Library/reducer';

// Shared Reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  device,
  library
});

export default rootReducer;
