import React from 'react'
import CategoryCards from './CategoryCards'
import Pricing from './Pricing'
import { Link } from 'react-router-dom' 

const CallToAction = () => {
  return (
    <section className='flex flex-col justify-center items-center px-4 py-8 md:py-12'>
      <div className='text-center space-y-3 mb-8'>
        <h1 className='text-2xl sm:text-3xl font-semibold text-orange-500'>
          Shop By Category
        </h1>
        <p className='text-sm sm:text-base max-w-2xl mx-auto'>
          Shop our curated list of products across the following categories.
        </p>
      </div>

      <CategoryCards />

      <Pricing />

      <div className='mt-12 space-y-6 text-center'>
        <h3 className='text-xl sm:text-2xl font-medium max-w-2xl mx-auto'>
          Explore our wide range of products at unbeatable price now.
        </h3>
        
        <Link 
          to='/shop' 
          className='inline-block text-lg sm:text-xl font-medium 
                   py-2 px-6 rounded-md 
                   text-white bg-orange-500 
                   hover:scale-105 hover:bg-orange-600
                   active:bg-black 
                   transform transition-all duration-200'
        >
          Shop Now
        </Link>
      </div>
    </section>
  )
}

export default CallToAction;