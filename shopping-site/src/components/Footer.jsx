import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full absolute bottom-0'>
      <div className='flex flex-col min-[480px]:flex-row gap-8 px-4'>
        <div className='w-[70%] block'>
          <h4 className='text-xl font-medium text-orange-600 text-center my-2'>Our Promise</h4>
          <p className='tracking-wide'>We at Kadai shopping aim to deliver products that provide higher value to our customers. Our service both in product quality and delivery time stands out from others. And still we constantly try to improve our service to better satisfy our customers by listening to your feedback. Keep shopping with us to support the community and feel free to contact us for any queries or details.</p>
        </div>
        <div className='flex flex-col gap-4 leading-4 w-[30%]'>
          <h4 className='text-xl font-medium text-orange-600 my-2 text-center'>Contact Us </h4>
          <p>&#128231; kadai@gmail.com</p>
          <p>&#128222; +91 7904855050</p>
          <p>&#127968; No. 6, Vivekanandar St., Dubai Kurukku sandhu, Dubai main road, Dubai. </p>
        </div>
      </div>
      <div className='text-center my-2 text-orange-500 bg-gray-200 mb-0'>
        Developed by <a className='hover:text-orange-600 active:scale-50' href="https://github.com/madesh02104" target='_blank'>@Madesh</a>
      </div>
    </footer>
  )
}

export default Footer