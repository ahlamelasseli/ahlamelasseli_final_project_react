import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../../data/products";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="p-4 w-full max-w-[230px] text-center">
    <img src={product.image} alt="" />
    <Link to={`/details/${product.title}`}
      className="text-lg mb-2 font-light hover:text-red-700"
    >
      {product.title}
    </Link>
    <p className="font-light text-black">{product.price}</p>
    {product.oldprice && (
      <p className="line-through text-sm text-black">{product.oldprice}</p>
    )}
  </div>
);

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [products.slice(0, 4), products.slice(4, 8)];

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full overflow-hidden relative pt-10 pb-1 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-black/90 p-10">
       FEATURED PRODUCTS
      </h1>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200 z-10"
      >
        <FiChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200 z-10">
        <FiChevronRight size={24} />
      </button>

      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex gap-6 justify-center flex-wrap">
            {slides[slideIndex].map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;