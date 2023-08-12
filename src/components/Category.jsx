import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import { GiChopsticks, GiNoodles} from 'react-icons/gi';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <Link>
        <SLink to="/cuisine/italian">
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>

        <SLink to="/cuisine/american">
            <FaHamburger/>
            <h4>American</h4>
        </SLink>

        <SLink to="/cuisine/thai">
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>

        <SLink to="/cuisine/japanese">
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>
    </Link>
  )
}

export default Category;

const Link = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:2rem;
    margin:2rem 0rem;
`
const SLink = styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    width:6rem;
    height:6rem;
    border-radius:50%;
    cursor:pointer;
    transform: scale(0.8);
    background: linear-gradient(35deg, #494949, #313131);
    
    h4{
        margin-top:0.5rem;
        color: #fff;
        font-size:0.8rem;
    }

    svg{
        color: #fff;
        font-size:2rem;
    }

    &.active{
        background:linear-gradient(to right, #f27121, #e94057)
    }
`