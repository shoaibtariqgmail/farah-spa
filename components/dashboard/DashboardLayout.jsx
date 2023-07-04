// components/layouts/DashboardLayout.js

import React from 'react';
import Header from './Header';
import Content from './Content';
import RightSection from './RightSection';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Header />
      <div className="flex bg-white">
        <Sidebar />
        <div className="">
          {/* <Content>{children}</Content> */}
        </div>
        <RightSection />
      </div>
    </div>
  );
};

export default DashboardLayout;
