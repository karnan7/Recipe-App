import React from 'react'
import Home from './Home'
import Category from '../components/Category'
import Cuisine from './Cuisine'
import { Routes, Route, useLocation } from 'react-router-dom'
import Search from '../components/Search'
import SearchedResults from './SearchedResults'
import Recipe from './Recipe'
import Navigation from '../components/Navigation'
import { AnimatePresence } from 'framer-motion'

const Page = () => {
  const location = useLocation();
  return (
    <div>
        <Navigation/>
        <Search/>
        <Category/>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home/>}/>
              <Route path="/cuisine/:type" element={<Cuisine/>}/>
              <Route path="/search/:result" element={<SearchedResults/>}/>
              <Route path="/recipe/:name" element={<Recipe/>}/>
          </Routes>
        </AnimatePresence>
    </div>
  )
}

export default Page