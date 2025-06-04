import React, { useState, useEffect } from 'react';
import images from '../constant/images';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('alphabetically-az');
  const [filters, setFilters] = useState({ category: '', priceRanges: [], sizes: [] });


  const [showModal, setShowModal] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  const allProducts = [
    { id: 1, name: "Boxy T-Shirt", price: 20.00, image: images.item3, category: "Featured", size: "L" },
    { id: 2, name: "Men's T-Shirt", price: 35.00, image: images.shopy2, category: "Men", size: "M" },
    { id: 3, name: "Women's T-Shirt", price: 15.00, image: images.shopy3, category: "Women", size: "S" },
    { id: 4, name: "Best Seller Tee", price: 25.00, image: images.shopy4, category: "Best Seller", size: "XL" },
    { id: 5, name: "Another Tee", price: 18.00, image: images.shopy5, category: "Featured", size: "L" },
    { id: 6, name: "Cool Tee", price: 30.00, image: images.shopy6, category: "Best Seller", size: "M" }
  ];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    let result = [...allProducts];

    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }

    if (filters.priceRanges.length > 0) {
      result = result.filter(product =>
        filters.priceRanges.some(range => {
          if (range === '0-20') return product.price <= 20;
          if (range === '20-40') return product.price > 20 && product.price <= 40;
          return false;
        })
      );
    }

    if (filters.sizes.length > 0) {
      result = result.filter(product => filters.sizes.includes(product.size));
    }

    if (searchQuery) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    result.sort((a, b) => {
      if (sortOrder === 'alphabetically-az') return a.name.localeCompare(b.name);
      if (sortOrder === 'alphabetically-za') return b.name.localeCompare(a.name);
      if (sortOrder === 'price-low') return a.price - b.price;
      if (sortOrder === 'price-high') return b.price - a.price;
      return 0;
    });

    setFilteredProducts(result);
  }, [filters, searchQuery, sortOrder]);

  const handleCategoryFilter = (category) => {
    setFilters(prev => ({ ...prev, category: prev.category === category ? '' : category }));
  };

  const handleCheckboxFilter = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  const getCategoryCount = (category) => {
    return allProducts.filter(product => product.category === category).length;
  };


  const handleAddToCart = (product) => {
    setAddedProduct(product);
    setShowModal(true);


    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">


      <div>
        <div className="bg-[url('/src/assets/images/banner.webp')] bg-cover bg-center h-[300px] flex items-center justify-center">
          <h1 className='font-bold text-5xl text-amber-50'>PRODUCTS</h1>
        </div>

      </div>

      <div className="container justify-center mx-auto px-4 py-12 flex flex-col md:flex-row gap-[40px]">
        <div className="w-full flex justify-between gap-15 md:w-3/4">
          <div>
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <ul className="space-y-2">
                {['Best Seller', 'Featured', 'Men', 'Women'].map(category => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryFilter(category)}
                      className={`text-gray-600 hover:text-red-500 ${filters.category === category ? 'text-red-500' : ''}`}
                    >
                      {category} ({getCategoryCount(category)} items)
                    </button>
                  </li>
                ))}
              </ul>
            </div>


            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Price</h2>
              <div className="space-y-2">
                {[
                  { label: '$0-20', value: '0-20' },
                  { label: '$20-40', value: '20-40' }
                ].map(range => (
                  <label key={range.value} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.priceRanges.includes(range.value)}
                      onChange={() => handleCheckboxFilter('priceRanges', range.value)}
                      className="form-checkbox text-red-500"
                    />
                    <span className="text-gray-600">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Size</h2>
              <div className="space-y-2">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <label key={size} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.sizes.includes(size)}
                      onChange={() => handleCheckboxFilter('sizes', size)}
                      className="form-checkbox text-red-500"
                    />
                    <span className="text-gray-600">{size}</span>
                  </label>
                ))}
              </div>
            </div>


            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-red-500"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <i className="fas fa-search text-gray-400"></i>
                </button>
              </div>
            </div>


          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-0 group-hover:bg-black group-hover:bg-opacity-10 transition-all duration-300">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-white text-gray-900 px-6 py-2 rounded-full transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-100"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <h3 className="text-center text-gray-800 mb-2">{product.name}</h3>
                <p className="text-center text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {showModal && addedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center animate-fade">
            <h2 className="text-xl font-bold text-green-600 mb-2"> Added Successfully!</h2>
            <p className="text-gray-700">
              <strong>{addedProduct.name}</strong> has been added to your cart successfully.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
