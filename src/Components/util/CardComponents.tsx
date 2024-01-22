import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
import { ProductItemsModel } from '../../model/ProductItems';
const { Meta } = Card;



// 波括弧を使用して Props の型を指定
const CardComponent: React.FC<{ product: ProductItemsModel }> = ({ product }) => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title={`${product.name} - ${product.price}円`}  // 商品名と価格を表示
        description={product.description}  // product のプロパティを使用

      />
    </Card>
  );
};

export default CardComponent;
