import React from 'react'
import CardComponent from '../Components/util/CardComponents'
import { styled } from 'styled-components'

const Product = () => {
  const ProductContainer = styled.div`
    display :flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    margin-top:1%;
  `
  return (
    <ProductContainer>
      <CardComponent/>
    </ProductContainer>
  )
}

export default Product