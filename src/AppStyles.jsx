import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-image: url('/assets/bg.png');
  background-color: #00980d;
  
`
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(19, 103, 19, 0.5);
  width: 80px;
`
export const PageBody = styled.div`
  display: flex;
  flex: 1;
  background-color: #00980d;
  background-image: url('/assets/bg.png');
  overflow-y: auto;
`
