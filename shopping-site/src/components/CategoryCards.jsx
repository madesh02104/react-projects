import React from 'react'
import CategoryCard from './CategoryCard'
import { FaHeadphones, FaRegGem, FaShirt, FaPersonDress } from 'react-icons/fa6'

const CategoryCards = () => {
  const categories = [
    { Icon: FaRegGem, title: 'Jewelery' },
    { Icon: FaHeadphones, title: 'Electronics' },
    { Icon: FaShirt, title: 'Mens Clothing' },
    { Icon: FaPersonDress, title: 'Womens Clothing' }
  ];

  return (
    <section className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-4'>
      {categories.map(({ Icon, title }) => (
        <CategoryCard 
          key={title}
          imgTag={<Icon className='h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 text-gray-800' />} 
          title={title}
        />
      ))}
    </section>
  )
}

export default CategoryCards;