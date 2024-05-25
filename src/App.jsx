import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Home from './Home'
import NavList from './components/NavList'
import Products from './Products'
import SingleItem from './SingleItem'
const App = () => {
  return (
    <Router>
    <div className=''>
      <NavList/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<SingleItem/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App
