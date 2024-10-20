import React from 'react'
import CategoryCards from './CategoryCards'
import { Link } from 'react-router-dom' 

const CallToAction = () => {
  return (
    <section className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-semibold text-orange-500 mb-6'>Shop By Category</h1>
        <p className='mb-4 text-center'>Shop our curated list of products across the following categories.</p>
        <CategoryCards />
        <h3 className='my-6 text-2xl font-medium text-center'>Explore our wide range of products at unbeatable price now.</h3>
        <Link to='/shop' className='text-xl font-medium py-2 px-4 rounded-md text-white bg-orange-500 hover:scale-105 active:bg-black'>Shop Now</Link>
    </section>
  )
}

export default CallToAction