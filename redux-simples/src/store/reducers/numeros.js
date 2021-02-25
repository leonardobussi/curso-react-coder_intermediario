import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from "../actions/actionTypes"


const initialState = { 
  min: 1,
  max: 10
}

function init (state = initialState, action){
    
  switch(action.type){
    case NUM_MIN_ALTERADO:
      return {
        ...state,
        min: action.payload
      }
    case NUM_MAX_ALTERADO:
      return {
        ...state,
        max: action.payload
      }
      default:
        return state
  }
}

export default init