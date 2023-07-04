import React from 'react';

const RightSectionSidebar = () => { 
    return (
     <div className="bg-[#F8F8F8] p-4 w-[370px]">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-[40px] font-bold">Statistics</h2>
            <div className='flex items-center gap-1'>
              <p className='text-[#A1A1A1] text-sm -mt-1'>statistics for October</p>
              <span><img src="/icons/static_errow.svg" alt="" /></span>
            </div>
          </div>
          <button className="bg-[#192A3E] rounded-xl h-14 w-14 flex justify-center items-center text-center">
            <img src="/icons/white_bell.svg" alt="" className='' />
          </button>
        </div>
        <div className='flex justify-between'>  
              <div className='bg-purple-600 w-52 rounded-3xl h-28 p-2'>
                <div className='flex items-center gap-2'>
                  <p className='text-xl text-white font-semibold'>product states</p>
                  <p className= ' bg-white rounded-full text-xs px-2 py-1 font-bold'>+ 13%</p>
                </div>
                <div>
                  
                </div>
                <div className='flex items-center gap-1'>
                  <p className='text-xs  text-white'>October</p>
                  <img src="/icons/static_errow_white.svg" alt="" />
                </div>
                <div className='flex justify-between mt-3'>
                  <p className='text-xl text-white font-bold'>$32,873</p>
                  <img src="/icons/green_bar.svg" alt="" />
                </div>
            </div>
            <div className='bg-[#FF4848] w-28 rounded-3xl p-2 h-28'>
              <p className='text-xl text-white font-semibold'>
                Customers
              </p>
              <div className='flex items-center gap-1 '>
                  <p className='text-xs  text-white'>October</p>
                  <img src="/icons/static_errow_white.svg" alt="" />
                </div>
                <p className='text-xl text-white font-bold mt-3'>
                  2,300
                </p>

            </div>
          </div>
          <div className='mt-10 bg-[#109CF1] rounded-3xl px-4 pt-4 text-white h-36'>
            <div className='flex items-center justify-between'>
              <div className=''>
                  <p className="text-xl font-semibold">
                    Latest Orders
                  </p>
                  <div className='flex items-center gap-1'>
                    <p className='text-xs  text-white'>October</p>
                    <img src="/icons/static_errow_white.svg" alt="" />
                </div>
              </div>
              <div className='flex items-center'>
                <img src="/images/user-img/user_1.svg" alt="" />
                <img src="/images/user-img/user_2.svg" alt="" />
                <img src="/images/user-img/user_3.svg" alt="" />
              </div>
              <div className='bg-white rounded-full p-2'>
                <img src="/icons/chat_icon.svg" alt="" />
              </div>
            </div>
          </div>
          <div className='bg-[#109CF1] rounded-3xl px-4 py-2 text-white shadow-[#109CF1] -mt-16 custom-shadow'>
              <div className='flex justify-between'>
                <div className='flex gap-3'>
                  <img src="/images/user-img/user_4.svg" alt="" />
                  <div>
                    <p>latest price </p>
                    <p>2000</p>
                  </div>
                </div>
                <img src="/icons/side_white_errow.svg" alt="" />
              </div>

          </div>
            <div className='bg-[#FFB948] rounded-3xl p-4 text-white mt-10'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='bg-white rounded-2xl p-3'>
                    <img src="/icons/sold_img.svg" alt="" />
                  </div>
                  <div>
                      <p className='text-xl font-semibold'>5390</p>
                      <p className='text-xl font-semibold'>Total Product Sold</p>
                    </div>
                </div>
               
                <img src="/icons/green_bar.svg" alt="" />
              </div>

            </div>
            <div className='bg-white rounded-md p-4 shadow mt-10'>
              <div className='flex justify-between'>
                <p className='text-xl font-bold'>Recent Sales</p>
                <p className='flex items-center gap-1 text-gray-400 text-xs cursor-pointer'>
                  
                  See All
                  <span>
                    <img src="/icons/static_errow.svg" alt="" className='h-2 w-2'/>
                  </span>
                </p>
              </div>
              <div className='bg-[#F1F1F1] rounded-md px-4 py-2  mt-2'>
                <div className='flex justify-between'>
                  <div className='flex gap-3'>
                    <img src="/images/user-img/user_2.svg" className='h-12 w-12' alt="" />
                    <div>
                      <p className='text-black font-bold text-sm'>Dianne Russell </p>
                      <p className='text-gray-400 text-sm'>06 days ago</p>
                    </div>
                  </div>
                  <p className='text-[#2ED47A] text-xl font-semibold'>+$50,00</p>
                </div>
              </div>
              <div className='bg-[#F1F1F1] rounded-md px-4 py-2  mt-2'>
                <div className='flex justify-between'>
                  <div className='flex gap-3'>
                    <img src="/images/user-img/user_3.svg" className='h-12 w-12' alt=""  />
                    <div>
                      <p className='text-black font-bold text-sm'>Dianne Russell </p>
                      <p className='text-gray-400 text-sm'>06 days ago</p>
                    </div>
                  </div>
                  <p className='text-[#2ED47A] text-xl font-semibold'>+$50,00</p>
                </div>
              </div>
              
              </div>
      
      </div>
    );
};

export default RightSectionSidebar;