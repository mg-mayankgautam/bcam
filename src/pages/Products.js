import React, { useEffect } from 'react'
import Header from '../components/ProductsPage/Header/Header'
import Collection from '../components/ProductsPage/Collection'

const Products = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div>
      <Header />
      <Collection />
    </div>
  )
}

export default Products