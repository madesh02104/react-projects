import React from 'react';
import {Link} from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className="mt-8 text-center flex flex-col justify-center items-center h-96">
    <FaExclamationTriangle className='text-red-600 text-6xl mb-4' />
    <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
    <p className="text-xl mb-5">This page does not exist. Check the url or get back to home.</p>
    <Link
      to="/"
      className="text-white bg-orange-500 hover:bg-orange-400 active:bg-black rounded-md px-3 py-2 mt-4"
      >Go Back
    </Link>
  </section>
  )
}

export default NotFoundPage