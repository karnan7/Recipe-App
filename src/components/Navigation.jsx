import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { IoFastFoodOutline } from 'react-icons/io5'

const Navigation = () => {
  return (
    <Nav>
        <IoFastFoodOutline/>
        <Logo to={"/"}>Drink and Dive</Logo>
    </Nav>
  )
}

export default Navigation;

const Nav = styled.nav`
  height:5rem;
  display:flex;
  align-items:center;

  svg{
    font-size:3rem;
    cursor:pointer;
  }
`
const Logo = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight:500;

`