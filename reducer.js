const clone = require('clone')
module.exports = reducer

function reducer (state, action){
  const newState = clone(state)
  const { products, cart } = newState
  const { type, payload } = action
  switch(type){
    case 'ADD_TO_CART':
      if (cart[payload] == undefined || 0)cart[payload] = 1
      else cart[payload] = cart[payload] +1
      return newState
    case 'REMOVE_FROM_CART':
      if (cart[payload] == undefined) return newState
      else cart[payload] = cart[payload] -1
      return newState
    default:
      return newState
  }
}
