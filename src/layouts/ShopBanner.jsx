import React from 'react'
import { Link } from 'react-router'

const ShopBanner = ({pageName}) => {
  return (
    <section className='pb-18'>

        <div className="container bg-[url('/shopbanner.png')] py-29 text-center">
            <h2 className='capitalize'>{pageName} Page</h2>
            <ul className="flex gap-2 text-sm font-normal text-secondary justify-center pt-4">
                <li><Link to="/">Home</Link></li>
                <span>/</span>
                <li><Link to={pageName=="product Detail"?"/productDetail":"/"+pageName} className='capitalize'>{pageName}</Link></li>
            </ul>
        </div>
    </section>
  )
}

export default ShopBanner
