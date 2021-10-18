import React from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const PrivateRoute = ({ children, ...rest }) => {
  const token = useSelector((state) => state.user.token)
  const history = useHistory()
  token === '' && history.push('/login')
  return <Route {...rest}>{children}</Route>
}

export default PrivateRoute
