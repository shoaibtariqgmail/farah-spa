// components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white text-black px-6 h-16 border-b-1 border-black">
      <div className="text-xl font-bold">
        <img src="/images/logo.svg" alt="logo" className='h-9'/>
      </div>
      <div className="flex items-center md:gap-20">
        <div className='flex items-center md:gap-4'>
          <span className="text-lg">Jacob Jones</span>
          <img
            src="/images/profile_img.svg"
            alt="User"
            className="h-11 w-11"
          />
        </div>
        <div className='flex gap-4'>
          <img src="/icons/bell_icon.svg" alt="bell_icon"  className='cursor-pointer'/>
          <img src="/icons/setting_icon.svg" alt="bell_icon"  className='cursor-pointer'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
