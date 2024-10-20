import React from 'react'

const CategoryCard = ({imgTag, title}) => {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-200 p-2 px-4 border border-black rounded'>
        {imgTag}
        <p className='text-xl text-orange-500 px-2 rounded font-semibold mt-2'>{title}</p>
    </div>
  )
}

export default CategoryCard