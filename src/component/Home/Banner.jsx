import React from 'react'
import { Link } from 'react-router'

const Banner = () => {
  return (
    <>
        <section className=" pb-12">
            <div className=" relative container bg-[url('/Background.png')] bg-no-repeat bg-cover bg-center  py-[272px]">
                <div className='absolute max-w-[432px]  left-[50%] top-[40%]'> 
                  <h1 className='   text-3xl font-normal text-primary   pb-6'>Awesome Product Collection In 2022</h1>
                  <Link to="/shop" className=" top-[] inline-block rounded-md ">Shop Now</Link>
                </div>

            </div>
        </section>
    </>
  )
}

export default Banner
