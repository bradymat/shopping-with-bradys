const createStore = require('redux').createStore
const morph = require('morphdom')

const reducer = require('./reducer')
const cart = require('./hyperscript/cartTemplate')

var initialState = {
  products: [
    {id: 1, name: 'The Name of the Wind', price: 12.50, details: 'Kvothe is cool'},
    {id: 2, name: 'Firefall', price: 11.29, details: 'Aliens are scary. Space vampires'},
    {id: 3, name: 'Kingdom of fear', price: 34.33, details: 'Song of the sausage creature'}
  ],
  cart: {
    1: 2,
    3: 7
  }
}



const store = createStore(reducer, initialState)
const dispatch = store.dispatch
const main = document.querySelector('main')

function updateView(){
  const state = store.getState()
  const newView = cart(state)
  morph(initialView, newView)
}

const initialView = main.appendChild(cart(initialState, dispatch))
store.subscribe(updateView)
