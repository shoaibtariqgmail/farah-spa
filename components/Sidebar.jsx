// components/Sidebar.js

import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 h-screen w-64 p-4 shadow-sidebar">
      <ul className="space-y-2">
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
        {/* Add more menu items as needed */}
      </ul>
    </aside>
  );
};

export default Sidebar;
