import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../../data/blogs';

const Blogs = () => {
  return (
    
   <div>
  <h1 className="text-3xl font-bold text-center  text-black/90 py-20">
       OUR BLOGS
      </h1>     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
      {blogs.map((e) => (
        <Link to={`/blogs/${e.name}`} key={e.title} className=" overflow-hidden hover:text-red-700 " >
          <div className="relative w-full h-96">
            <img
              src={e.image}
              className="w-full  object-cover transition-transform duration-300 group-hover:scale-110 "/>
 <p className="font-semibold  text-black hover:text-red-700">{e.title}</p>
           <p className="font-light text-black/70 ">{e.miniDesc}</p>
           
          </div>
          
        </Link>
      ))}
    </div>
   </div>
  );
};

export default Blogs; 