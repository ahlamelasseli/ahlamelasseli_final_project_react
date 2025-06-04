import React from 'react';

const Follow = () => {
  return (
    <section className="bg-white py-16 px-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-black/90 p-10">
       @ FOLLOW US ON INSTAGRAM
      </h1>
      <div className="flex flex-wrap -mx-4 justify-center">
        <div className="w-full sm:w-1/3 px-4 py-4 text-center">
          <h4 className="text-xl font-light mb-2">Free Delivery Worldwide</h4>
          <span className="text-sm text-gray-600">
            Mirum est notare quam littera gothica
          </span>
        </div>

        <div className="w-full sm:w-1/3 px-4 py-4 text-center border-x border-gray-300">
          <h4 className="text-xl font-light mb-2">30 Days Return</h4>
          <span className="text-sm text-gray-600 px-2">
            Simply return it within 30 days for an exchange.
          </span>
        </div>

        <div className="w-full sm:w-1/3 px-4 py-4 text-center">
          <h4 className="text-xl font-light mb-2">Store Opening</h4>
          <span className="text-sm text-gray-600">
            Shop open from Monday to Sunday
          </span>
        </div>
      </div>
    </section>
  );
};

export default Follow;