// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './phonebook-reducer';
import { configureStore } from '@reduxjs/toolkit';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
// const store = createStore(rootReducer, composeWithDevTools());

export default store;