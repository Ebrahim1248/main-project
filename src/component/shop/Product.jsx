import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Skeleton from '../../layouts/skeleton';
import ProductCard from '../../layouts/ProductCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState({
    total: 0,
    limit: 0,
    skip: 0,
  });

  const productCategory = [
    "all",
    "fragrances",
    "womens-bags",
    "home-decoration",
    "kitchen-accessories"
  ];

  // Fetch data
  useEffect(() => {
    setLoading(true);
    axios.get(`https://dummyjson.com/products${selectedCategory ? "/category/" + selectedCategory : ""}?limit=20&skip=${page.skip}`)
      .then((response) => {
        setData(response.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [selectedCategory, page.skip]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // Refresh AOS on data change
  useEffect(() => {
    AOS.refresh();
  }, [data]);

  return (
    <section>
      <div className="container py-18 bg-background">
        <div className="flex items-center justify-between pb-16">
          <ul className='flex gap-10 flex-wrap'>
            {productCategory.map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    setSelectedCategory(item === "all" ? "" : item);
                    setPage(prev => ({ ...prev, skip: 0 }));
                    setNum(1);
                  }}
                  className='capitalize cursor-pointer'
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <Link to="#" className='inline-block px-5'>filter</Link>
        </div>

        {loading ? (
          <Skeleton />
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data.map((item) => (
              <div key={item.id} data-aos="fade-up">
                <ProductCard data={item} />
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-10 justify-center text-3xl text-primary font-medium pt-10">
          <button
            onClick={() => {
              setPage(prev => ({ ...prev, skip: Math.max(prev.skip - 20, 0) }));
              setNum(prev => Math.max(prev - 1, 1));
            }}
            className="cursor-pointer"
          >
            previous
          </button>

          <h2 className="border-x-2 border-x-primary rounded-lg px-2.5">{num}</h2>

          <button
            onClick={() => {
              setPage(prev => ({ ...prev, skip: prev.skip + 20 }));
              setNum(prev => prev + 1);
            }}
            className="cursor-pointer"
          >
            next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
