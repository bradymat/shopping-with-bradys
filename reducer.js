const clone = require('clone')
module.exports = reducer

function reducer (state, action){
  const newState = clone(state)
  switch(action.type){
    case 'ADD_TO_CART':
      if (newState.cart[action.payload] == undefined || 0)newState.cart[action.payload] = 1
      else newState.cart[action.payload] = newState.cart[action.payload] +1
      return newState
    case 'REMOVE_FROM_CART':
      if (newState.cart[action.payload] == undefined) return newState
      else newState.cart[action.payload] = newState.cart[action.payload] -1
      return newState
    default:
      return newState
  }
}
