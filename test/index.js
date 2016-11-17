var test = require('tape')
var reducer = require('../reducer')


test('testing ShoppingCart', function (t) {
  t.ok(true)
  t.end()
})

test('test add to cart', function (t) {

  var state = {
    products: [
      {id: 1, name: 'The Name of the Wind', price: 12.50, details: 'Kvothe is cool'},
      {id: 2, name: 'Firefall', price: 11.29, details: 'Aliens are scary. Space vampires'},
      {id: 3, name: 'Kingdom of fear', price: 34.33, details: 'Song of the sausage creature'}
    ],
    cart: {
    }
  }
  var expected = {
    products: [
      {id: 1, name: 'The Name of the Wind', price: 12.50, details: 'Kvothe is cool'},
      {id: 2, name: 'Firefall', price: 11.29, details: 'Aliens are scary. Space vampires'},
      {id: 3, name: 'Kingdom of fear', price: 34.33, details: 'Song of the sausage creature'}
    ],
    cart: {
      1: 1
    }
  }
  var actual = reducer(state, {type: 'ADD_TO_CART', payload: 1})
  t.deepEquals(actual, expected, 'add to cart works')
  t.end()
})

test('test add to cart', function (t) {
  var state = {
    products: [
      {id: 1, name: 'The Name of the Wind', price: 12.50, details: 'Kvothe is cool'},
      {id: 2, name: 'Firefall', price: 11.29, details: 'Aliens are scary. Space vampires'},
      {id: 3, name: 'Kingdom of fear', price: 34.33, details: 'Song of the sausage creature'}
    ],
    cart: {
      1: 1
    }
  }
  var expected = {
    products: [
      {id: 1, name: 'The Name of the Wind', price: 12.50, details: 'Kvothe is cool'},
      {id: 2, name: 'Firefall', price: 11.29, details: 'Aliens are scary. Space vampires'},
      {id: 3, name: 'Kingdom of fear', price: 34.33, details: 'Song of the sausage creature'}
    ],
    cart: {
      1: 2
    }
  }
  var actual = reducer(state, {type: 'ADD_TO_CART', payload: 1})
  t.deepEquals(actual, expected, 'add to cart works')
  t.end()
})

test('test add to cart when another item exists', function (t) {
  var state = {
    products: [
      {id: 1, name: 'The Name of the Wind', price: 12.50, details: 'Kvothe is cool'},
      {id: 2, name: 'Firefall', price: 11.29, details: 'Aliens are scary. Space vampires'},
      {id: 3, name: 'Kingdom of fear', price: 34.33, details: 'Song of the sausage creature'}
    ],
    cart: {
      2: 1
    }
  }
  var expected = {
    products: [
      {id: 1, name: 'The Name of the Wind', price: 12.50, details: 'Kvothe is cool'},
      {id: 2, name: 'Firefall', price: 11.29, details: 'Aliens are scary. Space vampires'},
      {id: 3, name: 'Kingdom of fear', price: 34.33, details: 'Song of the sausage creature'}
    ],
    cart: {
      1: 1,
      2: 1
    }
  }
  var actual = reducer(state, {type: 'ADD_TO_CART', payload: 1})
  t.deepEquals(actual, expected, 'add to cart works when other items types are present')
  t.end()
})
