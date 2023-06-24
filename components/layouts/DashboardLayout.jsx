// components/layouts/DashboardLayout.js

import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Content from '../Content';
import RightSection from '../RightSection';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="">
          <Content>{children}</Content>
        </div>
        <RightSection />
      </div>
    </div>
  );
};

export default DashboardLayout;
