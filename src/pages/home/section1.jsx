import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';



const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.5,
        }
    }
}


const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}


const AnimatedSlide = () => {
    const [animationKey, setAnimationKey] = useState(0);

    const handleNext = () => {
        setAnimationKey((prev) => prev + 1)};

    const handlePrev = () => {
        setAnimationKey((prev) => prev + 1)};

    return (
        <div className="w-full   bg-[url('../../../assets/images/item-cart-01.png')]">
            <div className="relative mx-auto p-6 rounded-md flex flex-col items-center w-full">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={animationKey} variants={containerVariants} initial="hidden" animate="visible" exit="hidden"
                        className="flex flex-col justify-center items-center">
                        <motion.h1 variants={itemVariants} className="text-3xl font-bold mb-4">
                            FLASH SALE
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-gray-700 mb-6 max-w-xl text-center">
                            Woman Collection 2018
                        </motion.p>

                        <motion.button
                            variants={itemVariants}
                            className="  bg-white/90 text-black  text-center font-light py-2.5 w-40 rounded-4xl hover:bg-red-700
                             hover:text-white transition duration-300">
                            SHOP NOW
                        </motion.button>
                    </motion.div>
                </AnimatePresence>

                <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2
                     bg-gray-400/60 text-white/70  rounded-full w-10 h-10 flex items-center justify-center"
                    aria-label="Previous">
                    <FiChevronLeft size={24} />
                </button>

                <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-400/60 text-white/70 
                    rounded-full w-10 h-10 flex items-center justify-center" aria-label="Next">
                    <FiChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default AnimatedSlide