import React from 'react';

const RegisterAccount = () => {
  return (
    <div className='bg-[#B7B7B7] h-screen flex justify-center items-center flex-col'>
      <img src="/images/logo.svg" alt="" className='md:w-56 md:hidden pb-8' />

      <div className='bg-white md:w-2/3 md:h-[500px] w-80  h-auto flex md:pt-10 pt-3 items-center flex-col rounded-xl pb-5'>
        <img src="/images/logo.svg" alt="" className='w-56 md:block hidden' />
        <div className='md:py-2 md:text-2xl text-xl text-[poppins] md:font-semibold font-bold' >
          CREATE AN ACCOUNT
        </div>
        <div className=' md:grid  md:grid-cols-2 gap-6 flex flex-col px-8 md:px-20 pt-4 w-full md:pt-10'>
          <div className='border-b-1 border-[#885AF8] '>
            <input type="text" placeholder='First Name' className='border-2 border-none focus:outline-none' />
          </div>
          <div className='border-b-1 border-[#885AF8] '>
            <input type="text" placeholder='Last Name' className='border-2 border-none focus:outline-none' />
          </div>
          <div className='border-b-1 border-[#885AF8] '>
            <input type="email" placeholder='Email' className='border-2 border-none focus:outline-none' />
          </div>
          <div className='border-b-1 border-[#885AF8] '>
            <input type="password" placeholder='Password...' className='border-none focus:outline-none' />
          </div>
          <div className=' '>
            <div className='flex items-center'>
              <input type="checkbox" className='mr-2' />
              <span className='text-[10px]'>Subscribe to stay update with new products and offers!</span>
            </div>
            </div>
        </div>
        <div className='flex justify-center pt-10'>
            <button className='bg-black  md:h-[50px] h-7 rounded-lg text-white md:text-2xl md:w-56 w-28 text-base'>Submit</button>
          </div>
      </div>
    </div>
  )
}

export default RegisterAccount;
