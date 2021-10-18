import React, { useEffect, useState } from 'react'
import Header from '../../components/Template/Header'
import api from '../../api'
import ProductItem from '../../components/ProductItem'
import ReactToolTip from 'react-tooltip'
import {
  Container,
  CategoryArea,
  CategoryList,
  ProductArea,
  ProductList,
  ProductPaginationArea,
  ProductPaginationItem,
} from './styled'
import CategoryItem from '../../components/CategoryItem'
import Modal from '../../components/Modal'
import ModalProduct from '../../components/ModalProduct'

let searchTimer = null

export default () => {
  const [headerSearch, setHeaderSearch] = useState('')
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)
  const [products, setProducts] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [activePage, setActivePage] = useState(1)
  const [activeSearch, setActiveSearch] = useState('')
  const [modalStatus, setModalStatus] = useState(false)
  const [modalData, setModalData] = useState({})

  const getProducts = async () => {
    const products = await api.getProducts(
      activeCategory,
      activePage,
      activeSearch,
    )
    if (products.error === '') {
      setProducts(products.result.data)
      setTotalPages(products.result.pages)
      setActivePage(products.result.page)
    }
  }

  useEffect(() => {
    const getCategories = async () => {
      const cat = await api.getCategories()
      cat.error === '' && setCategories(cat.result)
      ReactToolTip.rebuild()
    }

    getCategories()
  }, [])

  useEffect(() => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(() => {
      setActiveSearch(headerSearch)
    }, 2000)
  }, [headerSearch])

  useEffect(() => {
    setProducts([])
    getProducts()
  }, [activeCategory, activePage, activeSearch])

  const handleProductClick = (data) => {
    setModalData(data)
    setModalStatus(true)
  }

  return (
    <Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
      {categories.length > 0 && (
        <>
          <CategoryArea>
            Selecione uma categoria
            <CategoryList>
              <CategoryItem
                data={{
                  id: 0,
                  name: 'Todas as categorias',
                  image: '/assets/food-and-restaurant.png',
                }}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
              {categories.map((item, index) => (
                <CategoryItem
                  key={index}
                  data={item}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
              ))}
            </CategoryList>
          </CategoryArea>
        </>
      )}
      {products.length > 0 && (
        <ProductArea>
          <ProductList>
            {products.map((item, index) => (
              <ProductItem
                key={index}
                data={item}
                onClick={handleProductClick}
              />
            ))}
          </ProductList>
        </ProductArea>
      )}

      {totalPages > 0 && (
        <ProductPaginationArea>
          {Array(totalPages)
            .fill(0)
            .map((item, index) => (
              <ProductPaginationItem
                key={index}
                active={activePage}
                current={index + 1}
                onClick={() => setActivePage(index + 1)}
              >
                {index + 1}
              </ProductPaginationItem>
            ))}
        </ProductPaginationArea>
      )}

      <Modal status={modalStatus} setStatus={setModalStatus}>
        <ModalProduct setStatus={setModalStatus} data={modalData} />
      </Modal>
    </Container>
  )
}
