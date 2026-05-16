import React from 'react';

function Header() {
  return (
    <header className='bg-blue-500 text-white p-4 md:p-6 lg:p-12 xl:p-24 '>
      <nav aria-label='Main Navigation'>
        <ul className='flex justify-between items-center'>
          <li><a href='#' className='text-lg font-bold'>Home</a></li>
          <li><a href='#about' className='text-lg font-bold'>About</a></li>
          <li><a href='#contact' className='text-lg font-bold'>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;