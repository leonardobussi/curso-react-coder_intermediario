import { createStore, combineReducers } from 'redux'
import numeroReducer from './reducers/numeros'

const reducers = combineReducers({
  numeros: numeroReducer
})

function storageConfig(){
  return createStore(reducers)
}

export default storageConfig