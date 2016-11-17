const h = require('hyperscript')

module.exports = cartTemplate

function cartTemplate(state, dispatch) {
const { products, cart } = state
  const productList = h('div', {id: 'productList'}, products.map((product) => {
    return h('div', [
      h('h1', product.name),
        addButton('ADD_TO_CART', product.id, 'add'),
        addButton('REMOVE_FROM_CART',product.id, 'remove')
    ])
  }))
  const checkout = h('div', {id: 'checkout'}, Object.keys(cart).map((item) => {
    var result = products.find((product) => {
      return product.id == item
    })
    return h('p', {}, `${result.name} Amount: ${cart[item]}`)
  }))
  return h('div', {}, [productList, checkout])
  function addButton (action, productId, buttonName) {
    return h('button', {onclick: () => dispatch({type: action, payload: productId})}, buttonName)
  }

}
