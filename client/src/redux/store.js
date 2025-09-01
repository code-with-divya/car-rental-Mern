import { legacy_createStore as  createstore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import {thunk} from "redux-thunk"


import carReducer from "./reducers/cardsreducer"
import alertReducer from './reducers/alertreducers';

const composeEnhancers = composeWithDevTools({
 
});
const rootReducer = combineReducers({
  carReducer,
  alertReducer
})

const store = createstore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
   
  )
);

export default store