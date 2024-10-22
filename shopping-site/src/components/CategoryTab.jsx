import React from 'react'

const CategoryTab = () => {
  return (
    <section className='w-[25%] p-4 shadow-2xl rounded'>
        <h3 className='text-2xl font-medium text-orange-500 text-center mb-4'>Select Category</h3>
        <hr />
        <hr />
        <ul className='flex flex-col justify-center items-center py-2'>
            <li onClick={() => handleCategoryChange(`all`)} className='text-xl px-1 py-3 rounded-md w-full border-2 border-white hover:bg-orange-200 hover:border-black active:scale-90'>All Items</li>
            <li onClick={() => handleCategoryChange(`men's clothing`)} className='text-xl px-1 py-3 rounded-md w-full border-2 border-white hover:bg-orange-200 hover:border-black active:scale-90'>Jewelry</li>
            <li onClick={() => handleCategoryChange(`women's clothing`)} className='text-xl px-1 py-3 rounded-md w-full border-2 border-white hover:bg-orange-200 hover:border-black active:scale-90'>Electronics</li>
            <li onClick={() => handleCategoryChange(`electronics`)} className='text-xl px-1 py-3 rounded-md w-full border-2 border-white hover:bg-orange-200 hover:border-black active:scale-90'>Mens's Clothing</li>
            <li onClick={() => handleCategoryChange(`jewelery`)} className='text-xl px-1 py-3 rounded-md w-full border-2 border-white hover:bg-orange-200 hover:border-black active:scale-90'>Women's Clothing</li>
        </ul>
    </section>
  )
}

export default CategoryTab