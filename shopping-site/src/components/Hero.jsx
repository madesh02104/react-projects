import React from "react";
import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="px-4 py-8 md:p-8 flex flex-col md:flex-row gap-12 md:gap-24 justify-between w-full">
      <div className="w-full md:w-[60%] mt-4 md:mt-6 space-y-6">
        <h2
          className="text-4xl font-semibold py-1 inline tracking-widest bg-orange-500 text-white leading-relaxed"
        >
          One stop solution to all your shopping needs.
        </h2>
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl tracking-wide">
            From accessories, clothing to electronics, jewelery.
          </h3>
          <h3 className="text-xl sm:text-2xl tracking-wide">
            We got you all covered.
          </h3>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={heroImage}
          alt="online shopping image"
          title="Image by storyset on Freepik"
          className="h-64 sm:h-72 md:h-80 w-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
