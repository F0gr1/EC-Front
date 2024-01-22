import React from 'react'
import   {QqCircleFilled} from '@ant-design/icons';
import { styled } from 'styled-components';

const Home = () => {
  const HomeContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin: 12%;
    font-size:36px;
    color:#EEE;
    text-align: center;
    & svg{
      font-size:80px;
    }
  `

  return (
  <HomeContainer>
    <QqCircleFilled />
    <p>ペンギンストア</p>
  </HomeContainer>
  )
}

export default Home