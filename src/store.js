import React from 'react'
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './reducer';
import thunk from "redux-thunk"

const middleware = [thunk];
const initialState = {
  name: '',
  email: '',
  password: '',
  confirmpassword:'',
  countrycode:'',
  mobileno: ''

}
const reducers = combineReducers({user : reducer})
const store = createStore(reducers,initialState,
  composeWithDevTools(applyMiddleware(...middleware)));
export default store
