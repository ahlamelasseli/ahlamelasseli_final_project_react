import React, { useState } from 'react';
import { FaOpencart, FaRegUser } from 'react-icons/fa';
import images from '../constant/images';
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="bg-gray-100 px-4 md:px-8 py-2 text-sm flex flex-col md:flex-row justify-between items-center">

                <div className="flex items-center gap-4 text-gray-600 mb-2 md:mb-0">
                    {["facebook-f", "twitter", "pinterest-p", "google-plus-g", "instagram"].map(icon => (
                        <a key={icon} href="#" className="hover:text-red-500">
                            <i className={`fab fa-${icon}`}></i>
                        </a>
                    ))}
                </div>


                <div className="text-gray-600 text-center mb-2 md:mb-0">
                    Free shipping for standard order over $100
                </div>


                <div className="flex items-center gap-4 text-gray-600">
                    <div className="pr-4 border-r border-gray-300">
                        fashe@example.com
                    </div>
                    <div>USD</div>
                </div>
            </div>


            <nav className="bg-white border-b border-gray-200 shadow-sm">
                <div className="px-4 md:px-8 py-4 flex justify-between items-center">

                    <a href="/" className="flex-shrink-0">
                        <img src={images.logo} alt="Logo" className="h-8" />
                    </a>


                    <button
                        className="text-black md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span className="material-icons">{isMenuOpen ? 'close' : 'menu'}</span>
                    </button>


                    <div className={`absolute md:static top-16 left-0 w-full md:w-auto  bg-red-600 md:bg-transparent md:flex items-center gap-8 px-4 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
                        {["Home", "Shop", "Sale", "Features", "Blog", "About", "Contact"].map((link, index) => (
                            <a
                                key={index}
                                href={`/${link.toLowerCase()}`}
                                className="block md:inline text-black font-medium hover:text-red-500 transition-colors duration-300 py-2 md:py-0"
                            >
                                {link}
                            </a>
                        ))}
                    </div>


                    <div className="hidden md:flex items-center gap-6 text-black">
                        <a href="/profile" className="hover:text-red-500 transition-colors duration-300">
                            <span className="material-icons"><FaRegUser /></span>
                        </a>
                        <a href="/cart" className="hover:text-red-500 transition-colors duration-300">
                            <span className="material-icons"><FaOpencart /></span>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
