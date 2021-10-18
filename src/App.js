import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ReactToolTip from 'react-tooltip'
import { Container, Menu, PageBody } from './AppStyles'
import HomeScreen from './pages/HomeScreen'
import Tela2Screen from './pages/Tela2Screen'
import MenuItem from './components/MenuItem'
import PrivateRoute from './components/PrivateRoute'
import Cart from './components/Cart'
export default () => {
  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem title="Loja" icon="/assets/store.png" link="/"></MenuItem>
          <MenuItem
            title="Pedidos"
            icon="/assets/order.png"
            link="/orders"
          ></MenuItem>
          <MenuItem
            title="Meu perfil"
            icon="/assets/profile.png"
            link="/profile"
          ></MenuItem>
        </Menu>
        <PageBody>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <PrivateRoute exact path="/orders">
              <div>tela de pedidos</div>
            </PrivateRoute>
            <PrivateRoute exact path="/profile">
              <div>tela de perfil</div>
            </PrivateRoute>
            <Route path="/tela2/:nome">
              <Tela2Screen />
            </Route>
          </Switch>
        </PageBody>
        <Cart />
        <ReactToolTip id="tip-top" place="top" effect="solid" />
        <ReactToolTip id="tip-right" place="right" effect="solid" />
      </Container>
    </BrowserRouter>
  )
}
