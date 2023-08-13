import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
    <Grid
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
        {search.map((item) => (
            <Card key={item.id}>
                <Link to={"/recipe/" + item.id}>
                    <img src={item.image} alt=""/>
                    <h4>{item.title}</h4>
                </Link>
            </Card>
        ))}
    </Grid>
  )
}

export default SearchedResults;

const Grid = styled(motion.div)`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap:3rem;
`
const Card = styled.div`
    cursor:pointer;
    img{
        width:100%;
        border-radius:2rem;
    }
    h4{
        text-align:center;
        padding:1rem;
    }
`
