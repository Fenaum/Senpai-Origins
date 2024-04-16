// src/components/storeHome/Home.tsx

import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Senpai Origins Store
      </h1>
      <p className="text-xl">Discover the best products for your needs.</p>

      <div className="grid grid-cols-3 gap-4 my-10">
        {/* Example product cards */}
        <div className="border border-gray-300 p-4">
          <img
            src="/path/to/image1.jpg"
            alt="Product 1"
            className="w-full h-48 object-cover"
          />
          <h2 className="text-xl font-bold mt-2">Product 1</h2>
          <p className="text-gray-600">$99.99</p>
        </div>
        <div className="border border-gray-300 p-4">
          <img
            src="/path/to/image2.jpg"
            alt="Product 2"
            className="w-full h-48 object-cover"
          />
          <h2 className="text-xl font-bold mt-2">Product 2</h2>
          <p className="text-gray-600">$199.99</p>
        </div>
        <div className="border border-gray-300 p-4">
          <img
            src="/path/to/image3.jpg"
            alt="Product 3"
            className="w-full h-48 object-cover"
          />
          <h2 className="text-xl font-bold mt-2">Product 3</h2>
          <p className="text-gray-600">$299.99</p>
        </div>
      </div>

      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;
