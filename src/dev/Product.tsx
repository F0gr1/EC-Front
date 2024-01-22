import React from 'react'
import CardComponent from '../Components/util/CardComponents'
import { styled } from 'styled-components'
import { ProductItemsModel } from '../model/ProductItems';

const ProductContainer = styled.div`
display :grid;
grid-template-columns: 1fr 1fr 1fr; 
justify-content:center;
align-items: center;
gap:3%;
padding: 0 1%;
margin-top: 1%;
`;

const Product = () => {
  const products:  ProductItemsModel[] =[
    { id : 1 , name:'くま' , price: 100 , description:'活発なくまさん' } ,
    { id : 2 , name:'くま2' , price: 200 , description:'活発なくまさん' } ,
    { id : 1 , name:'くま' , price: 100 , description:'活発なくまさん' } ,
    { id : 2 , name:'くま2' , price: 200 , description:'活発なくまさん' } ,
    { id : 1 , name:'くま' , price: 100 , description:'活発なくまさん' } ,
    { id : 2 , name:'くま2' , price: 200 , description:'活発なくまさん' } ,
    { id : 1 , name:'くま' , price: 100 , description:'活発なくまさん' } ,
    { id : 2 , name:'くま2' , price: 200 , description:'活発なくまさん' } ,
    { id : 1 , name:'くま' , price: 100 , description:'活発なくまさん' } ,
    { id : 2 , name:'くま2' , price: 200 , description:'活発なくまさん' } ,
    { id : 1 , name:'くま' , price: 100 , description:'活発なくまさん' } ,
    { id : 2 , name:'くま2' , price: 200 , description:'活発なくまさん' } ,
    { id : 1 , name:'くま' , price: 100 , description:'活発なくまさん' } ,
    { id : 2 , name:'くま2' , price: 200 , description:'活発なくまさん' } ,
    { id : 1 , name:'くま' , price: 100 , description:'活発なくまさん' } ,
    { id : 2 , name:'くま2' , price: 200 , description:'活発なくまさん' } ,
  ]
  return (
    <ProductContainer>
      {products.map((product: ProductItemsModel) =>{
          return (
            <CardComponent product = {product}/>
          )
      })}
    </ProductContainer>
  )
}

export default Product