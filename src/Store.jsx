// store.js

import { createStore, combineReducers } from 'redux';
import userReducer from './UserReducer';
import VideoReducer from './reducers/VideoReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  video: VideoReducer,
});

const store = createStore(rootReducer);

export default store;
