'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuclick, setmenuclick] = useState(false);

  function handlemenu() {
    setmenuclick(!menuclick);
  }

  return (
    <div className='bg-amber-50 text-black px-6 py-4 shadow-md'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold'>First App</h1>

        <ul className='hidden md:flex gap-8 font-medium'>
          <Link href='/'><li className='hover:font-bold cursor-pointer'>Weather App</li></Link>
          <Link href='/about'><li className='hover:font-bold cursor-pointer'>Currency Convertor</li></Link>
          <Link href='/contact'><li className='hover:font-bold cursor-pointer'>Quiz</li></Link>
          <Link href='/todo'><li className='hover:font-bold cursor-pointer'>Todo-List</li></Link>
        </ul>

        <button
          onClick={handlemenu}
          className='md:hidden bg-gray-200 p-2 rounded focus:outline-none'
        >
          <img className='h-5 w-5' src='menu.svg' alt='menu' />
        </button>
      </div>

      {menuclick && (
        <div className='md:hidden bg-gray-800 rounded mt-3 px-4 py-3'>
          <ul className='flex flex-col gap-3 text-sm font-semibold text-gray-200'>
            <Link href='/'><li className='hover:text-white cursor-pointer'>Weather App</li></Link>
            <Link href='/about'><li className='hover:text-white cursor-pointer'>Currency Convertor</li></Link>
            <Link href='/contact'><li className='hover:text-white cursor-pointer'>Quiz</li></Link>
            <Link href='/todo'><li className='hover:text-white cursor-pointer'>Todo-List</li></Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
