import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { ProductItemsModel } from '../model/ProductItems';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 700px;
  height: 300px;
  margin: auto;
  margin-top: 10%;
  background-color: #EEE;
`;

const ProductInfo = styled.div`
  margin-bottom: 20px;
`;

const ProductName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Price = styled.p`
  font-size: 16px;
  margin-top: 5px;
`;

const PaymentButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const PaymentPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate フックを追加
  const product = location.state && (location.state as { productData: ProductItemsModel }).productData;
  const stripe = useStripe();
  const elements = useElements();

  const handleClick = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.jsがまだ読み込まれていないかエラーが発生している場合
      return;
    }

    // カード情報を取得
    const cardElement = elements.getElement(CardElement);

    // Stripe.jsを使用して支払いを処理
    if (cardElement) {
      const { token, error } = await stripe.createToken(cardElement);
      if (error) {
        console.error(error);
      } else {
        // Laravel APIにトークンを送信
        sendTokenToLaravel(token.id);
      }
    }
  };

  const sendTokenToLaravel = async (tokenId: any) => {
    // Laravel側のAPIエンドポイントにPOSTリクエストを送信
    const response = await fetch('http://localhost/pay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Laravel側でCORSが有効になっていることを確認
      },
      body: JSON.stringify({ 
				token: tokenId,
				product_id: product.id,
				product_price: product.price,
			 }),
    });

    const responseData = await response.json();
    console.log(responseData);
    navigate(`/product`);
  };

  return (
    <Container>
      {product && (
        <ProductInfo>
          <ProductName>商品名{product.name}</ProductName>
          <Price>Price: {product.price}円</Price>
        </ProductInfo>
      )}
      <CardElement />
      <PaymentButton onClick={handleClick}>決済する</PaymentButton>
    </Container>
  );
};

export default PaymentPage;
