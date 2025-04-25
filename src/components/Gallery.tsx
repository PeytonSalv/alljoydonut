// src/components/Gallery.tsx
import React from 'react';

// Helper to import all images
const importAll = (r: any): string[] =>
  r.keys().map((key: string) => r(key).default || r(key));

const images: string[] = importAll(
  // @ts-ignore – ignore TypeScript complaining about require.context
  require.context('../assets/gallery', false, /\.(png|jpe?g|svg)$/)
);

const Gallery: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
