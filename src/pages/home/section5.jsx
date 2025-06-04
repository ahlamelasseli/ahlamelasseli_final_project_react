import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";

const Our = () => {
  const [filter, setFilter] = useState("all");

  const filteredProducts = products.filter((e) => {
    if (filter === "all") return true
    if (filter === "home") return e.category?.includes("home")
    if (filter === "best") return e.category?.includes("best")
    if (filter === "featured") return e.category?.includes("Featured")
    return true
  })
  



  return (
    <div className="px-5 py-10">
  <h1 className="text-3xl font-bold text-center mb-3 text-black/90 p-10">
       OUR PRODUCTS
      </h1>
      <div className="flex justify-center gap-4 mb-10">
           <button
          className={`px-4 py-2  text-sm  ${
            filter === "best" ? " text-black  underline" : " text-black" }`} onClick={() => setFilter("best")}>
          Best Seller
        </button>
        

        <button
          className={`px-4 py-2  text-sm ${
            filter === "featured" ? " text-black underline" : " text-black"}`} onClick={() => setFilter("featured")}>
          Featured
        </button>
        <button
          className={`px-4 py-2  text-sm   ${
            filter === "all" ? " text-black underline" : " text-black"}`} onClick={() => setFilter("all")}>
          Home
        </button>

     


      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((e) => (
          <Link to={`/product`} key={e.button} className="overflow-hidden">
        <div className="w-full h-96 relative group overflow-hidden">
  <img src={e.image} className="w-full h-full object-cover transition-transform duration-300"/>

  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
  </div>

  <button className=" absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white hover:bg-red-700 hover:text-white  text-sm rounded px-3 py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-250 z-10 ">
  ADD TO CART
</button>

</div>

            <h3 className="mt-2 font-light text-lg">{e.title}</h3>
            <div className="flex gap-2 items-center">
              <h3 className="text-black font-light">{e.price}</h3>
              {e.oldprice && (
                <h3 className="line-through font-light">{e.oldprice}</h3>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Our;