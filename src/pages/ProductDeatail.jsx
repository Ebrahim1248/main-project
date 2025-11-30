import React from 'react'
import ShopBanner from '../layouts/ShopBanner'
import SelectedProduct from '../productDetails/SelectedProduct'
import Discription from '../productDetails/Discription'

const ProductDeatail = () => {
  return (
    <>
      <ShopBanner pageName="product Detail"/>
      <SelectedProduct/>
      <Discription/>
    </>
  )
}

export default ProductDeatail

