import React from 'react'
import { useHistory, useLocation } from 'react-router'

import { Container, MenuIcon } from './styled'
const MenuItem = ({ icon, link, title }) => {
  const history = useHistory()
  const location = useLocation()
  let isActive = location.pathname === link

  const handleLinkClick = (e) => {
    e.preventDefault()
    history.push(link)
  }
  return (
    <Container
      data-tip={title}
      data-for="tip-right"
      active={isActive}
      href={link}
      onClick={handleLinkClick}
    >
      <MenuIcon src={icon} />
    </Container>
  )
}

export default MenuItem
