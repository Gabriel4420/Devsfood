import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgba(19, 103, 19, 0.6);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Logo = styled.img`
  height: 70px;
  width: auto;
`

export const SearchInput = styled.input`
  border: 0;
  border-radius: 25px;
  width: ${(props) => (props.active ? '300' : 0)}px;
  transition: all ease 0.8s;
  height: 50px;
  background-color: #fff;
  background-image: url('/assets/search.png');
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: 10px center;
  outline: 0;
  padding-left: 50px;
  cursor: pointer;
  font-size: 20px;
  &:focus {
    cursor: text;
  }
`
