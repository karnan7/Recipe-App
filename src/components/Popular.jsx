import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const Popular = () => {
    const[popular, setPopular] = useState([]);

    useEffect(() => {
        fetchPopular();
    }, [])
    
    const fetchPopular = async () => {
        const check = localStorage.getItem('popular');
        if(check) {
            setPopular(JSON.parse(check))
        }else {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await response.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes)
            console.log(data);
        }
    }

  return (
    <div>       
    <Wrapper>
    <h3>Popular Picks</h3>
        <Splide options={{
            perPage: 4,
            arrows: false,
           
            gap: '5rem'
        }}>
        {popular.map((item) => (
            <SplideSlide key={item.id}>
                <Card>
                    <Link to={'/recipe/' + item.id}>
                        <p>{item.title}</p>
                        <img src={item.image} alt={item.title}/>
                        <Gradient/>
                    </Link>
                </Card>
            </SplideSlide>
        ))}
        </Splide>
    </Wrapper>

    </div>
  )
}

export default Popular;

const Wrapper = styled.div`
    margin: 4rem 0rem;
`
const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    
    img{
        border-radius: 2rem;
        width:100%;
        height: 100%;
        object-fit:cover;
        position: absolute;
        left: 0;
    }
    p{
        position: absolute;
        z-index: 9;
        color:#fff;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        text-align: center;
        font-weight:600;
        height:40%;
        display:flex;
        justify-content: center;
        align-items:center;
    }
`
const Gradient = styled.div`
    position: absolute;
    width:100%;
    height: 100%;
    z-index:3;
    background: linear-gradient(rgba(0, 0, 0, 0) ,rgba(0, 0, 0, 0.5))
`