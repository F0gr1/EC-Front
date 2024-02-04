import React, { useEffect, useState } from 'react'
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
  const [products, setProducts] = useState<ProductItemsModel[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() =>{
    const fetchProductData = async() =>{
      try{
        const response = await fetch('http://localhost/products');
        const result = await response.json();
        if(result){
          const resultProducts = JSON.parse(result);  
          setProducts(resultProducts);
        }
      }catch(error:any){
        setError(error);
      }
    }
    fetchProductData();
  }, []);
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <ProductContainer>
      {products && products.length > 0 ? (
    products.map((product: ProductItemsModel) => (
      <CardComponent product={product} key={product.id} />
      ))
    ) : (
      <p>No products available</p>
    )}
    </ProductContainer>
  )
}

export default Product