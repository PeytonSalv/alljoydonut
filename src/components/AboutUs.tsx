// src/components/AboutUs.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-orange-500 mb-4">About Us</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Welcome to Alljoy Donut Shop in Bluffton, South Carolina! We're Troy and Kristie Derda —
            parents, entrepreneurs, and adventurers who swapped the icy Midwest winters for a temperate life
            in the Lowcountry.
          </p>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-800">Opening Hours:</h4>
            <p className="text-gray-600">Fri - Sun<br />7:00AM – 1:00PM</p>
          </div>

          <Link
            to="/about"
            className="inline-block px-5 py-3 text-white bg-teal-600 hover:bg-teal-700 transition rounded-full text-sm font-semibold shadow"
          >
            Read More
          </Link>
        </div>

        {/* Team Image */}
        <div className="flex justify-center md:justify-end relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-teal-100 rounded-3xl blur-xl opacity-70" />
          <img
            src="/team.png"
            alt="Alljoy Donut Team"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover relative hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
