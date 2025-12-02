import React from 'react'
import { FaArrowRight, FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail, MdPhoneInTalk } from 'react-icons/md'
import { TiSocialInstagram } from 'react-icons/ti'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer>
      <div className="container bg-background pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <div className="pb-18">
          <img src="/logo.png" alt="logo" />
          <div className="flex gap-6 items-start pt-8 ">
            <FaLocationDot className='text-lg text-secondary'  />
            <p className=" text-sm font-normal text-secondary max-w-[164px]">194 Main Rd T, FS Rayed VIC 3057, USA</p>
          </div>
          <div className="flex gap-6 items-start pt-4">
            <MdEmail className='text-lg text-secondary'  />
            <p className=" text-sm font-normal text-secondary">info@example.com</p>
          </div>
          <div className="flex gap-6 items-start pt-4 pb-4">
            <MdPhoneInTalk className='text-lg text-secondary' />
            <p className=" text-sm font-normal text-secondary">+012 345 678 102</p>
          </div>
          <div className="flex gap-5 ">
            <div className=" border-2 border-secondary rounded-4xl p-2 text-secondary"><FaTwitter /></div>
            <div className=" border-2 border-secondary rounded-4xl p-2 text-secondary"><TiSocialInstagram /></div>
            <div className=" border-2 border-secondary rounded-4xl p-2 text-secondary"><FaFacebookF /></div>
            <div className=" border-2 border-secondary rounded-4xl p-2 text-secondary"><FaGooglePlusG /></div>  
          </div>
        </div>
        <div className="">
          <h3 className=" text-lg font-semibold text-primary mb-8">Categories</h3>
          <ul className='flex flex-col gap-2.5 text-secondary text-sm font-normal'>
            <li><Link to="/">Men</Link></li>
            <li><Link to="/">Women</Link></li>
            <li><Link to="/">Accessories</Link></li>
            <li><Link to="/">Shoes</Link></li>
            <li><Link to="/">Dress</Link></li>
            <li><Link to="/">Denim</Link></li>
          </ul>
        </div>
        <div className="">
          <h3 className=" text-lg font-semibold text-primary mb-8">Infomation</h3>
          <ul className='flex flex-col gap-2.5 text-secondary text-sm font-normal'>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Contact Us</Link></li>
            <li><Link to="/">Terms & Conditions</Link></li>
            <li><Link to="/">Returns & Exchanges</Link></li>
            <li><Link to="/">Shipping & Delivery</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="">
          <h3 className='text-lg font-semibold text-primary mb-8'>Newsletter</h3>
          <div className='flex flex-col gap-2.5 text-secondary text-sm font-normal'>
            <p className='pb-4'>Subscribe to our newsletter and get 10% off your first purchase .</p>
            <div className="relative border-2 border-secondary md:w-[280px] lg:max-w-[450px]" >
              <input type="email" placeholder='Email Adderss' className='border-r-2 border-r-secondary max-h-10 md:w-[250px] lg:max-w-[400px]'/>
              <button className='absolute right-0 lg:right-0 top-1/2 -translate-1/2'><FaArrowRight /></button>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
