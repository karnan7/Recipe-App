import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Veggie = () => {
    const[veggie, setVeggie] = useState([]);

    useEffect(() => {
        fetchVeggie();
    }, [])
    
    const fetchVeggie = async () => {
        const check = localStorage.getItem('veggie');
        if(check) {
            setVeggie(JSON.parse(check))
        }else {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
            const data = await response.json();
            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            setVeggie(data.recipes)
            console.log(data);
        }
    }
  return (
    <div>       
        <Wrapper>
        <h3>Vegetarian Picks</h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                gap: '5rem'
            }}>
            {veggie.map((item) => (
                <SplideSlide key={item.id}>
                    <Card>
                        <p>{item.title}</p>
                        <img src={item.image} alt={item.title}/>
                        <Gradient/>
                    </Card>
                </SplideSlide>
            ))}
            </Splide>
        </Wrapper>
    </div>
  )
}

export default Veggie;

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