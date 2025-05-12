import React from 'react';
import { Link } from 'react-router-dom';

const images = [
  '/airbnb/a1.jpeg.avif',
  '/airbnb/a2.jpeg.avif',
  '/airbnb/a3.jpeg.webp',
  '/airbnb/a4.jpeg.avif',
  '/airbnb/a5.jpeg.avif',
  '/airbnb/a6.jpeg.avif'
];

const Airbnb: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-pacifico text-orange-500 mb-4">Stay with Us</h1>
          <p className="text-base md:text-lg text-gray-700 max-w-xl mx-auto">
            A charming, cozy getaway in the heart of Bluffton – just minutes from everything. Clean, stylish, and full of Southern charm.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Airbnb photo ${index + 1}`}
              className="rounded-xl shadow-md object-cover h-[250px] w-full hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-white rounded-3xl shadow-lg p-10 lg:p-16 text-center space-y-6">
          <h2 className="text-3xl text-orange-500 font-semibold">Book Direct and Save</h2>
          <p className="text-gray-700 text-lg">
            Contact Kristie for a discounted rate at <br />
            <span className="text-orange-600 font-semibold text-xl block mt-2">(262) 515‑2371</span>
          </p>

          <a
            href="https://www.airbnb.com/rooms/719528086356605460?check_out=2024-08-18&viralityEntryPoint=1&unique_share_id=1848523C-FE32-45A4-B86E-969A24A75382&slcid=8583aa2bfac44b47bdc69e3f37c17f35&s=76&feature=share&adults=1&check_in=2024-08-15&channel=native&slug=8ZSqE5o5&source_impression_id=p3_1722806295_P3c-9PTAG2oyOT9z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-white bg-orange-500 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Book Your Stay
          </a>
        </div>
      </div>
    </div>
  );
};

export default Airbnb;
