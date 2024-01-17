import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Login from '../dev/Login'
import Product from '../dev/Product'
import styled from 'styled-components'

const Navbar = () => {
  const Nav = styled.nav`
  
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    gap: 10%;
    height:50px;
    background-color: #b0c4de;

    &  a{
      text-decoration:none;
      color: #444;
      font-size:16px;
      font-weight:600
    }
  `;
  return (
    <div>
      <BrowserRouter>
          <Nav>
            <Link to="/">Home</Link>

            <Link to="/login">login</Link>

            <Link to="/product">product</Link>
          </Nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navbar
