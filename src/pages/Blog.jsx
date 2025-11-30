import React from 'react'

const Blog = () => {
    const blogs = [
  
  {
    id: 1,
    title: "Top 10 furniture Trends for 2025",
    desc: "Discover the latest fashion trends that will dominate the 2025 season.",
    img: "public/product-15.png",
    date: "agust 05, 2025",
  },
  {
    id: 2,
    title: "How to Choose the Best Running decoration accesoireses",
    desc: "A complete guide to picking the perfect running shoes that match your needs.",
    img: "public/product-12.png",
    date: "dec 12, 2025",
  },
  {
    id: 3,
    title: "5 Tips for Smart Online Shopping",
    desc: "Save money and avoid scams with these expert online shopping tips.",
    img: "public/product-11.png",
    date: "nov 18, 2025",
  },
  {
    id: 1,
    title: "Top 10 Fashion Trends for 2025",
    desc: "Discover the latest fashion trends that will dominate the 2025 season.",
    img: "public/product-8.png",
    date: "april 22, 2025",
  },
  {
    id: 2,
    title: "How to Choose the Best Running Shoes",
    desc: "A complete guide to picking the perfect running shoes that match your needs.",
    img: "public/product-3.png",
    date: "Feb 05, 2025",
  },
  {
    id: 3,
    title: "5 Tips for Smart Online Shopping",
    desc: "Save money and avoid scams with these expert online shopping tips.",
    img: "public/product-13.png",
    date: "Jan 18, 2025",
  },
];
  return (
    <>
      <div className="container mx-auto px-4 py-20">

        {/* Page Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center mb-10">
          Latest Blog & News
        </h2>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Blog Image */}
              <img src={item.img} alt="" className="w-full h-72 object-cover rounded-lg" />

              {/* Blog Content */}
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>

                <h3 className="text-xl text-primary font-semibold mb-3 hover:text-secondary transition">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>

                <button className="text-primary font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-12">
          <button className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition">
            Previous
          </button>

          <button className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition">
            Next
          </button>
        </div>

      </div>
    </>
  );
};

export default Blog;
