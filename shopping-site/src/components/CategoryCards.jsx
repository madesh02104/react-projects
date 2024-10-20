import React from 'react'
import CategoryCard from './CategoryCard'
import { FaHeadphones, FaRegGem, FaShirt, FaPersonDress } from 'react-icons/fa6'

const CategoryCards = () => {
  return (
    <section className='w-full flex flex-col justify-around sm:flex-row gap-8'>
        <CategoryCard imgTag={<FaRegGem className='h-40 w-40 text-gray-800' />} title={'Jewelery'}/>
        <CategoryCard imgTag={<FaHeadphones className='h-40 w-40 text-gray-800' />} title={'Electronics'}/>
        <CategoryCard imgTag={<FaShirt className='h-40 w-40 text-gray-800' />} title={'Mens Clothing'}/>
        <CategoryCard imgTag={<FaPersonDress className='h-40 w-40 text-gray-800' />} title={'Womens Clothing'}/>
    </section>
  )
}

export default CategoryCards