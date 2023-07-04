// components/RightSection.js

import React from 'react';
import RightSectionSidebar from './RightSectionSidebar';
// import ChartComponent from './chart/chart';

const RightSection = () => {
  return (
    <>
    <div className="flex justify-between  w-full">
      <div className='w-3/4'>
        <div className="pt-8 px-8">
            <div className='flex justify-between'>
              <div>
                <h4 className='text-[#90A087] text-3xl font-semibold'>
                  Manage
                </h4>
                <h2 className='text-[#192A3E] text-4xl font-bold'>Your Dashboard</h2>
              </div>
              <div className='flex items-center'>
                <img src="/icons/search_icon.svg" alt="" className='ml-5 absolute' />
                <input type="text" placeholder='Search' className=' pl-14 rounded-md w-96 h-14 border-none bg-[#F8F8F8] focus:outline-none' />
            </div>
          </div>
          <div className='flex justify-between'>
            <div>
              <div className='mt-14'>
                <h4 className='text-[#192A3E] text-3xl font-medium  font-[Poppins]'>
                  Monthly Profit
                </h4>
                <div className='flex items-center'> 
                  <h2 className='text-[#90A087]  font-[Poppins]'>Total Profit For October</h2>
                  <img src="/icons/static_errow.svg" alt="" className='inline-block ml-2' />
                </div>
              </div>
              <div className='mt-10'>
                <h4 className='text-[#90A087] text-lg font-medium  font-[Poppins]'>
                  Affiliate
                </h4>
                <div className=''> 
                  <h2 className='text-[#192A3E] text-4xl  font-[Poppins]'>24%</h2>
                  <div className="w-28 h-2 bg-[#FFEEF1] rounded-full mt-1">
                    <div className="w-1/2 h-full bg-purple-500 rounded-full"> </div>
                  </div>

                </div>
              </div>
              <div className='mt-6'>
                <h4 className='text-[#90A087] text-lg font-medium  font-[Poppins]'>
                  Offline Sales
                </h4>
                <div className=''> 
                  <h2 className='text-[#192A3E] text-4xl  font-[Poppins]'>16%</h2>
                  <div className="w-28 h-2 bg-[#FFEEF1] rounded-full mt-1">
                    <div className="w-1/2 h-full bg-[#FFB948] rounded-full"> </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="/images/chart circle.svg" alt="" className='' />
            </div>
          </div>
          <div className='mt-6'>
            <h4 className='text-3xl font-medium  font-[Poppins]'>
              Yearly Profit
            </h4>
            <p className='text-[#90A087]  font-[Poppins]'> Year 2022</p>
          </div>
          <div>
            {/* <ChartComponent /> */}
          </div>

        </div>
      </div>
      <div>
      <RightSectionSidebar />
      </div>
      
    </div>
      
    </>
  );
};

export default RightSection;
