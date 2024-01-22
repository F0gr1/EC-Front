import React from 'react'
import {QqOutlined  } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { styled } from 'styled-components';

const Home = () => {
  const HomeContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    & >div{
      background-color:white;
      width:20%;
      margin: 10% 40%;
      box-shadow: 1px 0px 18px -5px #787878;
      border-radius: 25px;
    }
  `

  return (
  <HomeContainer>
    <Result
      icon={<QqOutlined />}
      title="ウルヨ"
    />
    
  </HomeContainer>
  )
}

export default Home