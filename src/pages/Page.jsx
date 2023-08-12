import React from 'react'
import Home from './Home'
import Category from '../components/Category'
import Cuisine from './Cuisine'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Search from '../components/Search'

const Page = () => {
  return (
    <div>
        <Router>
            <Search/>
            <Category/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cuisine/:type" element={<Cuisine/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Page