import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const Cuisine = () => {
    const[cuisine, setCuisine]=useState([]);
    
    let param = useParams()

    useEffect(() => {
        fetchCuisine(param.type)
    },[param.type])

    const fetchCuisine = async(name) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`)
        const data = await response.json();
        setCuisine(data.results)
    }
  return (
    <Grid>
        {cuisine.map((item) => (
            <Card key={item.id}>
                <img src={item.image}/>
                <h4>{item.title}</h4>
            </Card>
        ))}
    </Grid>
  )
}

export default Cuisine;

const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap:3rem;
`
const Card = styled.div`

    img{
        width:100%;
        border-radius:2rem;
    }
    h4{
        cursor:pointer;
        text-align:center;
        padding:1rem;
    }
`