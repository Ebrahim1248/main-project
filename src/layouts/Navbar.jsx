import React, { useState } from 'react'
import { FaBars, FaRegUser } from 'react-icons/fa'
import { TfiShoppingCart } from 'react-icons/tfi'
import { Link } from 'react-router'

const Navbar = () => {
  const [show,setShow]=useState(false);
  return (
    <nav className='sticky top-0 bg-white shadow z-50 mb-0.5'>
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
        <div className={`md:hidden fixed ${show? "translate-x-0":"translate-x-full"}  top-24 right-0 bg-background  w-screen transition duration-500 pt-8 pb-4 `}>
          <ul className=" flex flex-col items-center  text-secondary font-medium text-lg ">
            <li><Link to="/" className='px-screen inline-block'>Home</Link></li>
            <li><Link to="/shop" className='px-full inline-block'>Shop</Link></li>
            <li><Link to="/contact" className='px-full inline-block'>contact</Link></li>
            <li><Link to="/About" className='px-2 lg:px-5 inline-block'>About</Link></li>
            <li><Link to="/Blog" className='px-2 lg:px-5 inline-block'>Blog</Link></li>
          </ul>
        </div>     
        <div className="flex gap-6 text-secondary items-center text-xl">
          <div className="flex  flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link 
              to="/signUp" 
              className="border border-primary px-2 py-1 md:px-5 md:py-2 text-white text-base md:text-lg font-medium bg-[#0D1164] hover:scale-105 transition-transform rounded-2xl w-full sm:w-auto text-center"
            >
              Sign up
            </Link>

            <Link 
              to="/Login" 
              className="border border-primary px-2 py-1 md:px-5 md:py-2 text-white text-base md:text-lg font-medium bg-[#0D1164] hover:scale-105 transition-transform rounded-2xl w-full sm:w-auto text-center"
            >
              Login
            </Link>
          </div>

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
