import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import { Link, useParams } from 'react-router';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  
  

const SelectedProduct = () => {
  const [num, setNum] = useState(1); // quantity
  const [productData, setProductData] = useState({});
  const [images, setImages] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${params.id}`).then((res) => {
      setProductData(res.data);
      const imgData = res.data.images.map((item) => ({
        original: item,
        thumbnail: item
      }));
      setImages(imgData);
    });
  }, [params.id]);

  // prevent num < 1
  const decreaseNum = () => {
    if (num > 1) setNum(num - 1);
  };

  const increaseNum = () => setNum(num + 1);

  const handelAddToCart = () => {
    axios.post("https://dummyjson.com/carts/add", {
      userId: 1,
      products: [
        {
          id: parseInt(params.id),
          quantity: num
        }
      ]
    })
      .then((res) => {
       toast.success("Product Added to cart")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <ToastContainer />
    <section className='container py-28'>
      <div className="grid grid-cols-2 lg:flex lg:gap-2.5">
        <ImageGallery items={images} thumbnailPosition='left' showFullscreenButton={false} />

        <div className="max-w-[540px] ml-4.5">
          <h2 className="text-primary text-3xl font-medium">{productData.title}</h2>
          <p className="pt-3 pb-6 text-xl text-secondary font-normal">({productData.rating})</p>
          <p className="text-secondary text-sm font-normal">{productData.description}</p>
          <h3 className='pt-4 lg:pt-8 pb-2.5 lg:pb-6 text-3xl text-badge font-normal'>{productData.price}$</h3>

          <div className="flex gap-5 text-lg text-secondary font-normal">
            <p className='pb-4.5 font-normal'>Stock:</p>
            <div>{productData.stock}</div>
          </div>

          <div className="pt-7 pb-8">
            <p className='pb-3.5 font-normal'>Size</p>
            <div className="flex gap-5 text-sm text-primary font-normal">
              <Link className='border-2 border-secondary px-1 inline-block cursor-pointer'>S</Link>
              <Link className='border-2 border-secondary px-1 inline-block cursor-pointer'>M</Link>
              <Link className='border-2 border-secondary px-1 inline-block cursor-pointer'>L</Link>
              <Link className='border-2 border-secondary px-1 inline-block cursor-pointer'>XL</Link>
              <Link className='border-2 border-secondary px-1 inline-block cursor-pointer'>XXL</Link>
            </div>
          </div>

          <div className="flex items-center gap-4 py-8">
            <p className='text-lg text-secondary font-normal'>Quantity :</p>
            <button onClick={decreaseNum} className='text-sm text-primary font-normal'>-</button>
            <span className='text-sm text-primary font-normal'>{num}</span>
            <button onClick={increaseNum} className='text-sm text-primary font-normal'>+</button>
          </div>

          <div className="flex gap-2 md:gap-6 md:my-6">
            <button className='mt-8 py-3 px-10 text-sm font-normal border-2 border-primary'>Buy Now</button>
            <button onClick={handelAddToCart} className='mt-8 py-3 px-10 text-sm font-normal border-2 border-primary'>Add To Cart</button>
          </div>

          <div className="flex gap-6">
            <p className='text-lg text-secondary font-normal'>Share</p>
            <div className="flex gap-5">
              <Link className="border-2 border-secondary rounded-4xl p-1 text-sm text-secondary inline-block cursor-pointer"><FaTwitter /></Link>
              <Link className="border-2 border-secondary rounded-4xl p-1 text-sm text-secondary inline-block cursor-pointer"><TiSocialInstagram /></Link>
              <Link className="border-2 border-secondary rounded-4xl p-1 text-sm text-secondary inline-block cursor-pointer"><FaFacebookF /></Link>
              <Link className="border-2 border-secondary rounded-4xl p-1 text-sm text-secondary inline-block cursor-pointer"><FaGooglePlusG /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default SelectedProduct;
