import React from 'react'
import { Link } from 'react-router-dom'

const NavList = () => {
  return (
    <div>
      <div className="navbar flex gap-y-4 md:gap-x-10 md:flex-row flex-col bg-slate-100 px-4 py-2 justify-center items-center">
        <div className="logo">
          <h1 className='text-4xl  font-semibold'>Navbar</h1>
        </div>
        <div className="nav-body flex flex-1 gap-x-8 md:gap-0 justify-between items-center">
          <ul className='flex gap-4 items-center'>
            <Link to={'/'}> <li className='text-xl text-slate-500 hover:underline'>Home</li></Link>
             <Link  to={'/products'}> <li className='text-xl text-slate-500 hover:underline'>web2</li></Link>
             <li className='text-xl text-slate-500 hover:underline'>web3</li>
          </ul>
          <button className='text-xl text-slate-500 font-semibold hover:text-slate-400'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default NavList
