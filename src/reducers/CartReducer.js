const initialState = {
  products: [],
  address: [],
  discount: 0,
  delivery: 0,
}

export default (state = initialState, action) => {
  const returnState = { ...state }
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const products = [...state.products]

      const { id } = action.payload.data
      const index = products.findIndex((item) => item.id === id)

      if (index !== -1) {
        products[index].qt += action.payload.qt
      } else {
        products.push({
          ...action.payload.data,
          qt: action.payload.qt,
        })
      }
      console.log(products)
      returnState.products = products
      break
    }
    case 'CHANGE_PRODUCT': {
      let products = [...state.products]

      switch (action.payload.type) {
        case '-':
          products[action.payload.key].qt--

          if (products[action.payload.key].qt <= 0)
            products = products.filter((item, i) => i !== action.payload.key)
          break
        case '+':
          products[action.payload.key].qt += 1
          break
        default:
          break
      }

      returnState.products = products
      break
    }
    default:
      break
  }

  return returnState
}
