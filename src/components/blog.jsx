import React from 'react';
import { Link } from 'react-router-dom';
import images from '../constant/images';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Black Friday Guide: Best Sales & Discount Codes",
            image: images.blog1,
            date: "22 Dec 2023",
            category: "Shopping Guide",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        },
        {
            id: 2,
            title: "The White Sneakers Nearly Every Fashion Girl Owns",
            image: images.blog2,
            date: "18 Dec 2023",
            category: "Fashion",
            excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        }
    ];

    const featuredProducts = [
        {
            id: 1,
            name: "Boxy T-Shirt with Roll Sleeve",
            price: 20.00,
            image:  images.blog3,
        },
        {
            id: 2,
            name: "Boxy1 T-Shirt with Roll Sleeve",
            price: 35.00,
            image:  images.blog2,
        },
        {
            id: 3,
            name: "Boxy2 T-Shirt with Roll Sleeve",
            price: 15.00,
            image: images.blog3,
        },
        {
            id: 4,
            name: "Boxy3 T-Shirt with Roll Sleeve",
            price: 25.00,
            image: images.blog2,
        }
    ];

    const tags = ["Fashion", "Lifestyle", "Denim", "Streetstyle", "Crafts"];

    return (
        <div className="min-h-screen bg-white">
            <div className="bg-[url('/src/assets/images/contacttop.webp')] bg-cover bg-center h-[300px] flex items-center justify-center">
                <h1 className='font-bold text-4xl md:text-5xl text-amber-50'>NEWS</h1>
            </div>

            {/* Blog Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        {blogPosts.map(post => (
                            <article key={post.id} className="mb-16">
                                <div className="mb-6 overflow-hidden">
                                    <img 
                                        src={post.image} 
                                        alt={post.title}
                                        className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="text-sm text-gray-500 mb-3">
                                    <span>{post.date}</span>
                                    <span className="mx-2">|</span>
                                    <span>{post.category}</span>
                                </div>
                                <h2 className="text-2xl font-semibold mb-4 hover:text-red-500 transition-colors">
                                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                </h2>
                                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                                <Link 
                                    to={`/blog/${post.id}`}
                                    className="inline-block text-gray-800 hover:text-red-500 transition-colors"
                                >
                                    Continue Reading →
                                </Link>
                            </article>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3">
                        {/* Search */}
                        <div className="mb-12">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                                />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <i className="fas fa-search text-gray-400"></i>
                                </button>
                            </div>
                        </div>

                        {/* Featured Products */}
                        <div className="mb-12">
                            <h3 className="text-lg font-semibold mb-6">Featured Products</h3>
                            <div className="space-y-4">
                                {featuredProducts.map(product => (
                                    <div key={product.id} className="flex gap-4">
                                        <Link to={`/shop/${product.id}`} className="w-20 h-20 flex-shrink-0">
                                            <img 
                                                src={product.image} 
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </Link>
                                        <div>
                                            <h4 className="text-sm hover:text-red-500 transition-colors">
                                                <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                            </h4>
                                            <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tags Cloud */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6">Tags Cloud</h3>
                            <div className="flex flex-wrap gap-2">
                                {tags.map(tag => (
                                    <Link 
                                        key={tag}
                                        to={`/blog/tag/${tag.toLowerCase()}`}
                                        className="px-4 py-2 bg-gray-100 text-gray-600 text-sm hover:bg-red-500 hover:text-white transition-colors rounded"
                                    >
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog; 