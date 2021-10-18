import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  Container,
  ProductArea,
  ProductPhoto,
  ProductInfoArea,
  ProductDetails,
  ProductButtons,
  ProductQuantityArea,
  ProductTitle,
  ProductButton,
  ProductQuantity,
  ProductQtImage,
  ProductQtText,
  ProductPrice,
} from './styled'

import { ProductIngredients } from '../ProductItem/styles'

const ModalProduct = ({ data, setStatus }) => {
  const [qt, setQt] = useState(1)
  const dispatch = useDispatch()
  useEffect(() => {
    setQt(1)
  }, [data])

  const handleCancelButton = () => {
    setStatus(false)
  }
  const handleMinusQT = () => qt > 1 && setQt(qt - 1)
  const handlePlusQT = () => (qt < 10000 ? setQt(qt + 1) : qt)

  const handleAddToCart = () => {
    // TODO:juntar as informações, mandar isso para o reducer, fechar o modal
    dispatch({
      type: 'ADD_PRODUCT',
      payload: { data, qt }
    })
    setStatus(false)
  }
  return (
    <Container>
      <ProductArea>
        <ProductPhoto src={data.image} />
        <ProductInfoArea>
          <ProductDetails>
            <ProductTitle>{data.name}</ProductTitle>
            <ProductIngredients>{data.ingredients}</ProductIngredients>
          </ProductDetails>
          <ProductQuantityArea>
            <ProductQuantity>
              <ProductQtImage src="/assets/minus.png" onClick={handleMinusQT} />

              <ProductQtText>{qt}</ProductQtText>

              <ProductQtImage src="/assets/plus.png" onClick={handlePlusQT} />
            </ProductQuantity>
            <ProductPrice>R${(data.price * qt).toFixed(2)}</ProductPrice>
          </ProductQuantityArea>
        </ProductInfoArea>
      </ProductArea>

      <ProductButtons>
        <ProductButton
          size="medium"
          bg="secondary"
          onClick={handleCancelButton}
        >
          cancel
        </ProductButton>
        <ProductButton size="big" bg="primary" onClick={handleAddToCart}>
          Adicionar ao Carrinho
        </ProductButton>
      </ProductButtons>
    </Container>
  )
}

export default ModalProduct
