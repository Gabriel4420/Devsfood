import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) =>
    props.active === props.id ? '#fff' : '#aae09a'};
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: 10px;
  transition: all ease 1s;
  cursor: pointer;
`
export const CategoryImage = styled.img`
  width: 55px;
  height: 55px;
`
