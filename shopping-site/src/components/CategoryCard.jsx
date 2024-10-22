
const CategoryCard = ({imgTag, title}) => {
  return (
    <div className='flex flex-col justify-center items-center 
                    bg-gray-200 hover:bg-gray-100 
                    p-4 sm:p-6 
                    border border-black rounded
                    transition-colors duration-200
                    group'>
      <div className='transform group-hover:scale-105 transition-transform duration-200'>
        {imgTag}
      </div>
      <p className='text-lg sm:text-xl text-orange-500 
                    px-2 rounded font-semibold mt-4
                    text-center'>
        {title}
      </p>
    </div>
  )
}

export default CategoryCard;