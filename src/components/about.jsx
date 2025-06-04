import React from 'react';
import about from '../assets/images/shopy4.webp';
const About = () => {
    return (
        <div>
            <div className="bg-[url('/src/assets/images/contacttop.webp')] bg-cover bg-center h-[300px] flex items-center justify-center">
<h1 className='font-bold text-5xl text-amber-50'>ABOUT</h1>
            </div>
            <div  className='flex flex-col sm:flex-row justify-between items-center gap-6 p-5 sm:p-8'>
                <img src={about} alt="" className=' w-100 p-8' />
                <div className='flex flex-col'><h1>Our story</h1>
                <span className='text-gray-600 '>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</span>
                <span className='text-gray-600 border-l-3  border-black/20 p-2'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                    
                    

                  <br /> <p className=' p-5xl'> - Steve Job’s</p></span>
                </div>
            </div>
        </div>
    );
};

export default About;