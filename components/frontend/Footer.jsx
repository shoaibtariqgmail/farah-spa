import React from 'react';

const Footer = () => {
  return (
    <div className=''>
    <footer className="grid md:grid-cols-3 grid-cols-1 text-center md:text-start bg-black p-6 text-white ">
      <div className="col-span-1 py-2 pb-4  md:hidden ">
       <div className='flex gap-5 text-start'>
        <img src="/icons/frontend/parcel_bus.svg" alt="" />
        <div>
          <p className='font-semibold text-base'>
            FREE SHIPPING & RETURN
          </p>
          <p className=' text-sm'>
            Free Nationwide Shipping
          </p>
        </div>
       </div>
       <div className='flex gap-5 text-start'>
        <img src="/icons/frontend/money_back.svg" alt="" />
        <div>
          <p className='font-semibold text-base'>
          MONEY BACK GUARANTEE
          </p>
          <p className=' text-sm'>
          30 days money back guarantee
          </p>
        </div>
       </div>
      </div>
      <hr className='md:hidden w-full text-gray-400 pb-4' />
      <div className="col-span-1">
        <div className='flex justify-center w-full md:justify-start'>
          <img src="/images/footer_logo.svg" alt="Logo" />
         </div>
        <p className=' text-[poppins] text-xl py-4 '>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
        <p className=' text-[poppins] text-xl py-4'>(319) 555-0115</p>
        <div className='flex gap-2 py-4 justify-center md:justify-start'>
            <p className=' text-[poppins] text-xl '>deanna.curtis@example.com</p>
            <img src="/icons/frontend/user-img/facebook.svg" alt="" />
            <img src="/icons/frontend/user-img/instagram.svg" alt="" />
        </div>
      </div>
      <hr className='md:hidden w-full text-gray-400 pb-4' />
      <div className="col-span-1  ">
        <h1 className='text-2xl font-semibold '>CUSTOMER SERVICE</h1>
        <p className=' text-[poppins] text-xl cursor-pointer py-4 '>Contact Us </p>
        <p className=' text-[poppins] text-xl cursor-pointer py-4'>About Us</p>
        <p className=' text-[poppins] text-xl cursor-pointer py-4'>FAQ</p>
        <p className=' text-[poppins] text-xl cursor-pointer py-4'>Track My Order</p>
        <div className='w-full flex justify-center md:justify-start'>
          <div className='border-b-1 border-white w-56 flex'>
              <input type="mail"placeholder='Enter your email' className='bg-transparent border-none focus:outline-none' />
              <img src="/icons/frontend/user-img/mail_icon.svg" alt="" className='pl-2' />
          </div>
        </div>
      </div>
      <div className="col-span-1  md:block hidden">
        <h1 className='text-2xl font-semibold '>QUICK LINK</h1>
        <p className=' text-[poppins] text-xl cursor-pointer py-4 '>Search </p>
        <p className=' text-[poppins] text-xl cursor-pointer py-4'>Page 1</p>
        <p className=' text-[poppins] text-xl cursor-pointer py-4'>Page 2</p>
        <p className=' text-[poppins] text-xl cursor-pointer py-4'>Page 3</p>
      </div>
      
     
    </footer>
    </div>
  );
};

export default Footer;