// CardComponent.tsx

import React from 'react';
import { AccountBookOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar,  Card, } from 'antd';
import { ProductItemsModel } from '../../model/ProductItems';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

const CustomCard = styled(Card)`
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }

  &:active {
    transform: scale(0.95);
    transition: transform 0.2s ease-in-out;
  }
`;

const CardComponent: React.FC<{ product: ProductItemsModel }> = ({ product }) => {
  const navigate = useNavigate();
  const imagePath = 'http://localhost/storage/images/anpanman.jpg';
  const handleClick = (product: ProductItemsModel) => {
    // 商品カードがクリックされたら詳細ページに遷移し、商品データを渡す
    navigate(`/product/${product.id}`, { state: { productData: product } });
  };
  return (
  <div>
    {product.sold_at ?(
         <CustomCard
         hoverable
         cover={
          <img src={imagePath} alt="Uploaded Image" />
         }
         className="bg-gray-500"
       >
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title={`Sold ${product.name} - ${product.price}円`}
            description={product.description}
          />
        </CustomCard>

    ):(
   <CustomCard
        hoverable
        cover={
          <img src={imagePath} alt="Uploaded Image" />
        }
        actions={[
          <AccountBookOutlined key="buy" onClick={() => handleClick(product)} />,
          <PlusOutlined key="add" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
          title={`${product.name} - ${product.price}円`}
          description={product.description}
        />
    </CustomCard>
    )}
    
  </div>    
  );
};

export default CardComponent;
