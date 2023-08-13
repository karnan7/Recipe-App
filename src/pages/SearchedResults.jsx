import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const SearchedResults = () => {
    const[search, setSearch]=useState([]);
    const param = useParams();

    useEffect(() => {
        fetchSearch(param.result)
    }, [param.result])

    const fetchSearch = async (name) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${param.result}`)
        const data = await response.json();
        setSearch(data.results);
    }
  return (
    <Grid>
        {search.map((item) => (
            <Card key={item.id}>
                <img src={item.image}/>
                <h4>{item.title}</h4>
            </Card>
        ))}
    </Grid>
  )
}

export default SearchedResults;

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
const num = 42;
const str = " is the answer.";
const result = num + str; 
console.log(result);