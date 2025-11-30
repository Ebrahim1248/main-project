import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Link } from 'react-router'

const ProductCard = ({data}) => {
  
  return (
    <div className='flex relative flex-col bg-white items-center gap-4 pb-3'>
        <Link to={`/shop/${data.id}`}><img src={data?.thumbnail} alt="Popular Product" /></Link>
        <Link to={`/shop/${data.id}`}><h2 className='text-primary text-sm text-center'>{data?.title}</h2></Link>
        <p>{data?.price}</p>
    </div>
  )
}

export default ProductCard

