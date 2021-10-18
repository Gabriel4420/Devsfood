import styled from 'styled-components'

export const Container = styled.div`
  width: 650px;
  padding: 20px;
`

export const ProductArea = styled.div`
  height: 200px;
  display: flex;
`
export const ProductInfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`
export const ProductQuantityArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ProductButtons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ProductPhoto = styled.img`
  border-radius: 10px;
  width: 310px;
`
export const ProductDetails = styled.div``

export const ProductTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
`
export const ProductButton = styled.button`
  border-radius: 5px;
  background-color: ${(props) =>
    (props.bg === 'primary' && '#073c07') ||
    (props.bg === 'secondary' && '#8F1E56')};
  height: ${(props) =>
    (props.size === 'medium' && '30px') || (props.size === 'big' && '60px')};
  border: none;
  box-shadow: 4px 5px 0px rgba(0, 0, 0, 0.16);
  color: #fff;
  font-size: ${(props) => (props.size === 'big' ? '22px' : '14px')};
  font-weight: ${(props) => props.size === 'big' && 'bold'};
  padding: ${(props) =>
    (props.size === 'big' && '10px 20px') ||
    (props.size === 'medium' && '5px 10px')};
  margin-right: 10px;
  cursor: pointer;
  transition: all ease 1s;

  &:hover {
    background-color: ${(props) =>
      (props.bg === 'primary' && '#44DB44') ||
      (props.bg === 'secondary' && '#FF69B4')};
  }
`
export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  background-color: #073c07;
  border-radius: 5px;
  height: 50px;
  box-shadow: 4px 5px 0px rgba(0, 0, 0, 0.16);
  cursor: pointer;
`
export const ProductQtImage = styled.img`
  width: 24px;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
`
export const ProductQtText = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: white;
`
export const ProductPrice = styled.h2`
  font-size: 30px;
  font-weight: bold;
`
