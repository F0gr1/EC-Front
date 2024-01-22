import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Login from '../dev/Login'
import Product from '../dev/Product'
import styled from 'styled-components'
import Home from '../dev/Home'

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #b0c4de;
  padding:0 2%;
  & a {
    text-decoration: none;
    color: #444;
    font-size: 16px;
    font-weight: 600;
  }
`;

const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
          <Nav>
            <Link to="/"><span>ペンギンストア</span></Link>
            <Link to="/product">product</Link>
            <Link to="/login">login</Link>
          </Nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navbar
