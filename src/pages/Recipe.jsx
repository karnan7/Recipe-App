import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const Recipe = () => {
  const[details, setDetails] = useState({});
  const[activeTab, setActiveTab] = useState("instructions");

  const param = useParams();
  
  useEffect(() => {
    fetchDetails(param.name);
  },[param.name])
  
  const fetchDetails = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${param.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const data = await response.json();
    setDetails(data);
  }
  return (
    <Wrap>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>

      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>
          Instructions
        </Button>

        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>
          Ingredients
        </Button>

          { activeTab === 'instructions' && (
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
              <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
            </div>
          )}

          { activeTab === 'ingredients' && (
            <ul>
              {details.extendedIngredients.map ((item) => (
                <li key={item.id}>{item.original}</li>
              ))}
            </ul>
          )}
      </Info>
    </Wrap>
  )
}

export default Recipe;

const Wrap = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display:flex;

  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }

  h2{
    margin-bottom: 2rem;
  }

  li{
    font-size:1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
`
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background:#fff;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`
const Info = styled.div`
  margin-left: 10rem;
  h3{
    font-weight:500;
  }
`