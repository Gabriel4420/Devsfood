import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CartArea,
  CartHeader,
  CartBody,
  CartIcon,
  CartText,
  ProductsArea,
  ProductItem,
  ProductPhoto,
  ProductInfoArea,
  ProductTitle,
  ProductPrice,
  ProductQuantityArea,
  ProductQtIcon,
} from './styled'
const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart.products)
  const [show, setShow] = useState(false)
  const handleProductChange = (key, type) => {
    dispatch({
      type: 'CHANGE_PRODUCT',
      payload: { key, type },
    })
  }
  return (
    <CartArea>
      <CartHeader onClick={() => setShow(!show)}>
        <CartIcon src="/assets/cart.png" />
        <CartText>Meu Carrinho ({products.length}) </CartText>
        {show && <CartIcon src="/assets/down.png" />}
      </CartHeader>
      <CartBody show={show}>
        <ProductsArea>
          {products.map((item, index) => (
            <ProductItem key={index}>
              <ProductPhoto src={item.image} />
              <ProductInfoArea>
                <ProductTitle>{item.name}</ProductTitle>
                <ProductPrice>R$ {item.price.toFixed(2) * item.qt}</ProductPrice>
              </ProductInfoArea>
              <ProductQuantityArea>
                <ProductQtIcon
                  src="/assets/minus.png"
                  onClick={() => handleProductChange(index, '-')}
                />
                <p>{item.qt}</p>
                <ProductQtIcon
                  src="/assets/plus.png"
                  onClick={() => handleProductChange(index, '+')}
                />
              </ProductQuantityArea>
            </ProductItem>
          ))}
        </ProductsArea>
      </CartBody>
    </CartArea>
  )
}

export default Cart
