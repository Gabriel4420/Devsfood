import React, { useState } from 'react'
import { Container, Logo, SearchInput } from './styled'

const Header = ({ search, onSearch }) => {
  const [inputActive, setInputActive] = useState(search === '' ? false : true)

  const handleInputFocus = (_) => setInputActive(true)
  const handleInputBlur = (_) => search === '' && setInputActive(false)
  const handleChange = (e) => onSearch(e.target.value)
  return (
    <Container>
      <Logo src="/assets/logo.png" />
      <SearchInput
        type="text"
        value={search}
        active={inputActive}
        onChange={handleChange}
        placeholder="Procure um produto"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  )
}

export default Header
