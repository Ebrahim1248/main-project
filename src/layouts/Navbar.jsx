import React, { useState } from 'react'
import { FaBars, FaRegUser } from 'react-icons/fa'
import { TfiShoppingCart } from 'react-icons/tfi'
import { Link } from 'react-router'

const Navbar = () => {
  const [show,setShow]=useState(false);
  return (
    <nav>
      <div className="container  flex justify-between items-center py-14">
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
        {/* for computer */}
        <div className="hidden md:block">
          <ul className=" flex text-secondary font-medium text-lg ">
            <li><Link to="/" className='px-2 lg:px-5 inline-block'>Home</Link></li>
            <li><Link to="/shop" className='px-2 lg:px-5 inline-block'>Shop</Link></li>
            <li><Link to="/contact" className='px-2 lg:px-5 inline-block'>contact</Link></li>
            <li><Link to="/About" className='px-2 lg:px-5 inline-block'>About</Link></li>
            <li><Link to="/Blog" className='px-2 lg:px-5 inline-block'>Blog</Link></li>
          </ul>
        </div>  
        {/* for mobile    */}
        <div className={`md:hidden fixed ${show? "translate-x-0":"translate-x-full"}  top-24 right-0 bg-background  w-screen transition duration-500 pt-8 pb-4`}>
          <ul className=" flex flex-col items-center  text-secondary font-medium text-lg ">
            <li><Link to="/" className='px-screen inline-block'>Home</Link></li>
            <li><Link to="/shop" className='px-full inline-block'>Shop</Link></li>
            <li><Link to="/contact" className='px-full inline-block'>contact</Link></li>
          </ul>
        </div>     
        <div className="flex gap-6 text-secondary items-center text-xl">
          <Link to="/signUp"className='border-1 border-primary px-5 text-white text-1xl font-medium bg-[#0D1164] hover:scale-105 translate-0.3 py-2 rounded-2xl'>Sign up</Link>
          <Link to="Login"className='border-1 border-primary px-5 text-white text-1xl font-medium bg-[#0D1164] hover:scale-105 translate-0.3 py-2 rounded-2xl'>Login</Link>

        <Link to="/"><TfiShoppingCart /></Link>
        </div>
        <button onClick={()=>setShow(!show)} className='md:hidden cursor-pointer'>
          <FaBars />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
