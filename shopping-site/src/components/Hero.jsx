import React from 'react';

const Hero = () => {
  return (
    <section className='p-8 flex flex-col gap-24 justify-between w-full min-[750px]:flex-row'>
      <div className='w-full mt-6 min-[750px]:w-[60%]'>
        <h2 className='text-4xl font-semibold py-1 inline tracking-widest bg-orange-500 text-white leading-relaxed'>
          One stop solution to all your shopping needs.
        </h2>
        <h3 className='text-2xl mt-8 mb-1 tracking-wide'>
          From accessories, clothing to electronics, jewelery.
        </h3>
        <h3 className='text-2xl tracking-wide'>
            We got you all covered.
        </h3>
      </div>
      <div className='w-full min-[750px]:w-1/2'>
        <img src="src/assets/hero-image.jpg" alt="online shopping image" title='Image by storyset on Freepik' className='h-80' />
      </div>
    </section>
  );
}

export default Hero;
