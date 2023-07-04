import React from 'react'
import Link from 'next/link'

const login = () => {
  return (
    <div className='bg-[#B7B7B7] h-screen flex justify-center items-center flex-col'>
        <img src="/images/logo.svg" alt="" className='md:w-56 md:hidden pb-8'/>

        <div className='bg-white md:w-[500px] md:h-[500px] w-80 h-auto flex md:pt-10 pt-3 items-center flex-col rounded-xl pb-5'>
        <img src="/images/logo.svg" alt="" className='w-56 md:block hidden'/>
        <div className='md:py-2 md:text-4xl text-xl text-[poppins] '>
            Login
        </div>
        <div className='flex  flex-col gap-5  items-center'>
            <div className='border-b-1 border-[#885AF8] w-[90%] md:w-auto'>
                <input type="mail" placeholder='Email' className='border-2  md:w-[400px] md:h-[50px] border-none focus:outline-none'/>
            </div>
            <div className='border-b-1 border-[#885AF8] w-[90%] md:w-auto'>
                <input type="password" placeholder='Password...' className='md:w-[400px] md:h-[50px] border-none focus:outline-none'/>
            </div>
            <div className='flex w-full justify-between '>
                <div className='flex items-center'>
                    <input type="checkbox" className='mr-2'/>
                    <span className='text-[10px]'>Remember me</span>
                </div>
                <div className='text-right'>
                    <p className='text-[#109CF1] text-[10px]'>
                        <Link href={"/reset-password"}>
                            Forgot Password?
                        </Link>
                    </p>
                    <p className='text-[#109CF1] text-[10px]'>
                        click here to get your password
                    </p>
                </div>
            </div>
            <div className='flex justify-center flex-col'>
                <button className='bg-black  h-[50px] rounded-lg text-white text-2xl w-60'>Login</button>
                <p className='text-center pt-2'>
                    <Link href="/register-account">
                        Create an account?
                    </Link>
                </p>
            </div>
            </div>


        </div>
    </div>
  )
}

export default login
