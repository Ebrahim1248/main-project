import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import Skeleton from '../../layouts/Skeleton';
import ProductCard from '../../layouts/ProductCard';

import 'aos/dist/aos.css';
import AOS from 'aos';

const Popular = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productCategory, setProductCategory] = useState([
        "all",
        "fragrances",
        "womens-bags",
        "home-decoration",
        "kitchen-accessories"
    ]);
    const [selectedCategory, setSelectedCategory] = useState("");

    // Fetch data
    useEffect(() => {
        setLoading(true); 
        axios.get(`https://dummyjson.com/products${selectedCategory ? "/category/" + selectedCategory : ""}?limit=10&skip=0`)
            .then((response) => {
                setData(response.data.products);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [selectedCategory]);

  
    useEffect(() => {
        AOS.init({
        duration: 1000, 
        once: false, 

        }); 
        AOS.refresh();
    }, []);

    return (
        <section className='py-13 '>
            <div className="container bg-background pt-24 pb-8">
                {/* Title & Description */}
                <div  className="flex flex-col items-center gap-7 mb-14">
                    <h2 className="text-3xl font-normal text-primary">Popular Products</h2>
                    <p className="text-center max-w-[750px] text-sm font-normal text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod 
                        temp incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Category Buttons */}
                <div data-aos="fade-up" className="flex items-center justify-between pb-12 flex-wrap gap-4">
                    <ul className='flex gap-6 flex-wrap'>
                        {productCategory.map((item) => (
                            <li key={item}>
                                <button 
                                    onClick={() => setSelectedCategory(item === "all" ? "" : item)} 
                                    className={`capitalize cursor-pointer px-3 py-1 rounded transition
                                        ${selectedCategory === item ? 'bg-primary text-white' : 'text-secondary hover:text-primary'}`}>
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <Link to="#" className='inline-block px-5 text-primary hover:underline'>Filter</Link>
                </div>

                {/* Products Grid */}
                {loading ? (
                    <Skeleton />
                ) : (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {data.map((item) => (
                            <div key={item.id} data-aos="fade-up">
                                <ProductCard data={item} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Popular;
