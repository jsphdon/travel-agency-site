// src/components/HomeComponents/Heading.js
import React from "react";

const Heading = () => {
  return (
    <div className="relative h-screen pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}
      ></div>

      {/* Overlaying Div */}
      <div className="relative z-10 flex items-center justify-center h-full p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg">
          <h1 className="text-2xl font-bold mb-4">Hello, World!</h1>
          <p>This is a div on top of a background image.</p>
        </div>
      </div>
    </div>
  );
}

export default Heading;
