import styled from 'styled-components'

export const CartArea = styled.div`
  background-color: #136713;
  position: fixed;
  bottom: 0;
  right: 30px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
export const CartIcon = styled.img`
  width: 23px;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
`
export const CartHeader = styled.div`
  height: 50px;
  display: flex;
  width: 290px;
  max-width: 100%;
  align-items: center;
  cursor: pointer;
`
export const CartBody = styled.div`
  display: ${(props) => (props.show == true ? 'block' : 'none')};
  color: white;
`
export const CartText = styled.h2`
  flex: 1;
  color: white;
  font-size: 17px;
`
export const ProductsArea = styled.div``
export const ProductInfoArea = styled.div`
  flex: 1;
  margin-left: 10px;
`
export const ProductQuantityArea = styled.div`
  display: flex;
  align-items: center;
`
export const ProductItem = styled.div`
  display: flex;
  margin: 5px 10px;
`
export const ProductPhoto = styled.img`
  width: 64px;
  height: auto;
`
export const ProductTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
`
export const ProductPrice = styled.div`
  font-size: 13px;
`
export const ProductQtIcon = styled.img`
  width: 13px;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`
