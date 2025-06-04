import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-600 pt-16 pb-5">
            <div className="max-w-screen-xl mx-auto px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">

                   
                    <div className="flex flex-col gap-4">
                        <h3 className="text-gray-900 text-lg font-semibold">GET IN TOUCH</h3>
                        <p className="text-sm leading-relaxed">
                            Any questions? Let us know in store at 8th floor, 379 Hudson St,
                            New York, NY 10018 or call us on (+1) 96 716 6879
                        </p>
                        <div className="flex gap-4 mt-3 text-lg">
                            <a href="#" className="hover:text-[#3b5998]"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="hover:text-[#1da1f2]"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="hover:text-[#bd081c]"><i className="fab fa-pinterest-p"></i></a>
                            <a href="#" className="hover:text-[#db4437]"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="hover:text-[#e4405f]"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-gray-900 text-lg font-semibold mb-2">CATEGORIES</h3>
                        {["Men", "Women", "Dresses", "Sunglasses"].map(item => (
                            <a key={item} href="#" className="text-sm hover:text-gray-900">{item}</a>
                        ))}
                    </div>
                  <div className="flex flex-col gap-3">
                        <h3 className="text-gray-900 text-lg font-semibold mb-2">LINKS</h3>
                        {["Search", "About Us", "Contact Us", "Returns"].map(item => (
                            <a key={item} href="#" className="text-sm hover:text-gray-900">{item}</a>
                        ))}
                    </div>
                     <div className="flex flex-col gap-3">
                        <h3 className="text-gray-900 text-lg font-semibold mb-2">HELP</h3>
                        {["Track Order", "Returns", "Shipping", "FAQs"].map(item => (
                            <a key={item} href="#" className="text-sm hover:text-gray-900">{item}</a>
                        ))}
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-gray-900 text-lg font-semibold mb-2">NEWSLETTER</h3>
                        <div className="flex gap-2 mt-2">
                            <input 
                                type="email" 
                                placeholder="Email Address"
                                className="px-4 py-2 border border-gray-300 rounded-md text-sm flex-1"
                            />
                            <button className="px-5 py-2 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-700">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center border-t border-gray-300 pt-5 text-sm text-gray-600">
                    © 2022 Shopify Theme Developed by MassTechnologist. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
