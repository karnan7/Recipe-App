import React, { useState } from 'react'
import { styled } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Search = () => {
    const[input, setInput] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/search/" + input);
        
    }

  return (
    <Form onSubmit={handleSubmit}>
        <div>
            <FaSearch/>
            <input 
            type="text"
            placeholder='search'
            value={input}
            onChange={(e) => setInput(e.target.value)} />
        </div>
    </Form>
  )
}

export default Search;

const Form = styled.form`
    margin: 0rem 20rem;

    div{
        width: 100%;
        position:relative;
    }

    input{
        border:none;
        outline:none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size:1rem;
        color:white;
        padding: 1rem 4rem;
        border-radius:1rem;
        width:100%;
    }

    svg{
        font-size:1.5rem;
        color:white;
        position:absolute;
        top:50%;
        left:0%;
        transform:translate(100%, -50%)
    }
`