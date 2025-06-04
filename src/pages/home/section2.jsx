import React from 'react';
import { Link } from 'react-router-dom';
import { category } from '../../data/category';

const Product = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
      
      {category.map((e) => (
        <Link to={`/product`} key={e.button} className="group border border-gray-200 overflow-hidden relative" >
          <div className="relative w-full h-96">
            <img
              src={e.image}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>

            <span className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 text-black w-1/2 text-center font-light px-4 py-2  
              hover:bg-red-700 hover:text-white transition duration-300">
              {e.button}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Product;