// components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-4">
      <div className="text-xl font-bold">Logo</div>
      <div className="flex items-center space-x-2">
        <img
          src="/path-to-user-image.jpg"
          alt="User"
          className="h-8 w-8 rounded-full"
        />
        <span className="text-sm">User Name</span>
      </div>
    </header>
  );
};

export default Header;
