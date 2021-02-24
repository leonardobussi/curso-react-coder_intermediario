import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
  numeros: function(state, action){
    console.log("reducer numeros ...")
    console.log(state, ' ', action)
    return {
      min: 1,
      max: 10
    }
  },
  nomes: function(state, action){
    console.log("reducer names ...")
    console.log(state, ' ', action)
    return [
      'Ana',
      'Bia',
      'Carlos'
    ]
  }
})

function storageConfig(){
  return createStore(reducers)
}

export default storageConfig