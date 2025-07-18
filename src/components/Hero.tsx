import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-cream pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-72 sm:h-72 bg-orange-100 rounded-full blur-3xl opacity-30 -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-teal-600/20 rounded-full blur-3xl opacity-30 -z-10 animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-orange-500/20 rounded-full blur-2xl opacity-20 -z-10 animate-bounce" />

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl px-2 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-900">
            Taste Joy in Every Bite
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Alljoy Donut Co. brings you handcrafted donuts made fresh every day with premium ingredients and a lot of love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/menu"
              className="inline-block px-6 py-3 text-white text-sm font-semibold bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition duration-200 hover:scale-105 transform"
            >
              View Our Menu
            </Link>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 text-orange-500 text-sm font-semibold border-2 border-orange-500 rounded-full hover:bg-orange-50 transition duration-200 hover:scale-105 transform"
            >
              Catering
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
            <div className="flex space-x-3 sm:space-x-4">
              {['/yelp.svg', '/tripadvisor.svg', '/facebook.svg', '/google.svg'].map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt={`Icon ${index + 1}`}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="text-center sm:text-left text-sm sm:ml-4">
              <div className="font-semibold text-gray-900">500+ Happy Customers</div>
              <div className="text-orange-500">★★★★★ 4.9/5</div>
            </div>
          </div>
        </div>

        {/* Donut Image */}
        <div className="flex justify-center md:justify-end relative px-4 sm:px-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-orange-500/10 to-teal-600/10 rounded-full blur-3xl -z-10" />
          <img
            src="/donutstack.png"
            alt="Stack of Donuts"
            className="w-60 sm:w-72 md:w-96 lg:w-[420px] drop-shadow-xl hover:scale-105 transition-transform duration-300 animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
