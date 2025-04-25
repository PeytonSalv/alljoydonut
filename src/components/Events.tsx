// src/components/Events.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Events: React.FC = () => {
  return (
    <section className="bg-cream py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/board.png"
            alt="Donut Event Wall"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-orange-500 mb-4">Donuts for Every Occasion</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Make your next event unforgettable with Alljoy Donut Co. Whether it's a wedding, birthday, office
            celebration, or pop-up market — our handcrafted donuts bring a whole lot of joy and a whole lot of
            flavor to your gathering.
          </p>

          <Link
            to="/events"
            className="inline-block px-5 py-3 text-white bg-teal-600 hover:bg-teal-700 transition rounded-full text-sm font-semibold shadow"
          >
            Book Your Event
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
