import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  padding: 10px;
  display: flex;
  align-items: center;
  color: #136713;
  opacity: 0.8;
  transition: all ease 0.8s;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
export const ProductPhotoArea = styled.div`
  max-width: 100px;
  width: 100%;
`
export const ProductInfoArea = styled.div`
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
`
export const ProductButtonArea = styled.div``
export const ProductPhoto = styled.img`
  width: 100%;
  border-radius: 20%;
`
export const ProductName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  &:hover{
    text-decoration: underline;
  }
`
export const ProductPrice = styled.p`
  font-size: 14px;
`
export const ProductIngredients = styled.p`
  font-size: 12px;
`
export const ProductButton = styled.img`
  max-width: 16px;
  width: 100%;
`
