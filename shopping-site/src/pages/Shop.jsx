import React from 'react'
import CategoryTab from '../components/CategoryTab'
import ItemCards from '../components/ItemCards'
import { useState } from 'react'

const Shop = () => {
  const [category, setCategory] = useState('all');

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
  }

  return (
    <section className='mt-20 flex flex-col justify-between gap-4'>
      <CategoryTab handleCategoryChange={handleCategoryChange}/>
      <ItemCards category={category}/>
    </section>
  )
}

export default Shop