import React from 'react';
import Footer from './layouts/footer';
import Nav from './layouts/navbar';
import About from '../src/components/about';
import { Route, Routes, Navigate } from 'react-router-dom';
import Contact from '../src/components/contact';
import Blog from './components/blog';
import Shop from './components/shop';
import Home from './components/home';

const App = () => {
  return (
    <>
    <Nav />

    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
    <Footer />
    </>
  );
};

export default App;