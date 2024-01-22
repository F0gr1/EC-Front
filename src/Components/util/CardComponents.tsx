// CardComponent.tsx

import React, { useState } from 'react';
import { AccountBookOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Modal } from 'antd';
import { ProductItemsModel } from '../../model/ProductItems';
import styled from 'styled-components';

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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handlePurchase = () => {
    // 購入ボタンがクリックされたときの処理を追加
   alert(`商品「${product.name}」を購入しました。`);
    setIsModalVisible(false); // モーダルを閉じる
  };

  return (
    <CustomCard
      hoverable
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <AccountBookOutlined key="buy" onClick={showModal} />,
        <PlusOutlined key="add" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title={`${product.name} - ${product.price}円`}
        description={product.description}
      />

      {/* モーダルの内容 */}
      <Modal title="購入内容" visible={isModalVisible} onCancel={handleCancel} footer={[
          <Button key="cancel" onClick={handleCancel}>
            キャンセル
          </Button>,
          <Button key="purchase" type="primary" onClick={handlePurchase}>
            購入
          </Button>,
        ]}
      >
      <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
        <p>商品名: {product.name}</p>
        <p>価格: {product.price}円</p>
       
      </Modal>
    </CustomCard>
  );
};

export default CardComponent;
