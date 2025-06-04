import React, { useState, useEffect } from 'react';
import item02 from './src/assets/images/item-02.jpg';
import item03 from './src/assets/images/item-03.jpg';
import item05 from './src/assets/images/item-05.jpg';
import item07 from './src/assets/images/item-07.jpg';
const Shop = () => {
    const [sortOrder, setSortOrder] = useState('alphabetically-az');
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        category: '',
        priceRanges: [],
        sizes: []
    });

    const allProducts = [
        {
            id: 1,
            name: "Boxy T-Shirt with Roll Sleeve Detail",
            price: 20.00,
            image: imageitem02,
            category: "Featured",
            size: "L"
        },
        {
            id: 2,
            name: "Boxy1 T-Shirt with Roll Sleeve",
            price: 35.00,
            image: item03,
            category: "Men",
            size: "M"
        },
        {
            id: 3,
            name: "Boxy2 T-Shirt with Roll Sleeve",
            price: 15.00,
            image: item02,
            category: "Women",
            size: "S"
        },
        {
            id: 4,
            name: "Boxy3 T-Shirt with Roll Sleeve",
            price: 25.00,
            image: item05,
            category: "Best Seller",
            size: "XL"
        },
        {
            id: 5,
            name: "Boxy4 T-Shirt with Roll Sleeve",
            price: 18.00,
            image:item03,
            category: "Featured",
            size: "L"
        },
        {
            id: 6,
            name: "Boxy5 T-Shirt with Roll Sleeve",
            price: 30.00,
            image: item07,
            category: "Best Seller",
            size: "M"
        }
    ];

    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    const handleCategoryFilter = (category) => {
        setFilters(prev => ({
            ...prev,
            category: prev.category === category ? '' : category
        }));
    };

    const handleCheckboxFilter = (type, value) => {
        setFilters(prev => ({
            ...prev,
            [type]: prev[type].includes(value)
                ? prev[type].filter(item => item !== value)
                : [...prev[type], value]
        }));
    };

    useEffect(() => {
        let result = [...allProducts];

        if (filters.category) {
            result = result.filter(product => product.category === filters.category);
        }

        if (filters.priceRanges.length > 0) {
            result = result.filter(product => {
                return filters.priceRanges.some(range => {
                    if (range === '0-20') return product.price <= 20;
                    if (range === '20-40') return product.price > 20 && product.price <= 40;
                    return false;
                });
            });
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
            switch (sortOrder) {
                case 'alphabetically-az':
                    return a.name.localeCompare(b.name);
                case 'alphabetically-za':
                    return b.name.localeCompare(a.name);
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                default:
                    return 0;
            }
        });

        setFilteredProducts(result);
    }, [filters, searchQuery, sortOrder]);

   
    const getCategoryCount = (category) => {
        return allProducts.filter(product => product.category === category).length;
    };

    return (
        <div className="min-h-screen bg-white">
         
            <div className="relative h-[300px] bg-black">
                <img 
                    src="/images/carousel2.jpg" 
                    alt="Shop Banner" 
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute bg-[url('/src/assets/images/banner.webp')] inset-0 flex items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">PRODUCTS</h1>
                </div>
            </div>

     
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row gap-8">
               
                    <div className="w-full md:w-1/4">
                
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold mb-4">Categories</h2>
                            <ul className="space-y-2">
                                {['Best Seller', 'Featured', 'Men', 'Women'].map(category => (
                                    <li key={category}>
                                        <button 
                                            className={`text-gray-600 hover:text-red-500 ${
                                                filters.category === category ? 'text-red-500' : ''
                                            }`}
                                            onClick={() => handleCategoryFilter(category)}
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
                                {['L', 'M', 'S', 'XL'].map(size => (
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

                
                    <div className="w-full md:w-3/4">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="group">
                                    <div className="relative overflow-hidden mb-4">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                            <button className="bg-white text-gray-900 px-6 py-2 rounded-full transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-100">
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
            </div>
        </div>
    );
};

export default Shop; 
