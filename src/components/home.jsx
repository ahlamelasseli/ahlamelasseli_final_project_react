import React from 'react';
import Section1 from '../pages/home/section1';
import Section2 from '../pages/home/section2';
import Section3 from '../pages/home/section3';
import Section4 from '../pages/home/section4';
import Section5 from '../pages/home/section5';
import Section6 from '../pages/home/section6';
import Section7 from '../pages/home/section7';
import AnimatedSlide from '../pages/home/section1';
import Product from '../pages/home/section2';
import Carousel from '../pages/home/section3';
import Blogs from '../pages/home/section4';
import Our from '../pages/home/section5';
import Follow from '../pages/home/section6';

const Home = () => {
    return (
        <div>
<AnimatedSlide></AnimatedSlide>   
<Product></Product>  
       <Carousel></Carousel>
       <Our></Our>
<Blogs></Blogs>  
<Follow></Follow>        
        </div>
    );
};

export default Home;