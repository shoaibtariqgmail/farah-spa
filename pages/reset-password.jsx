import React,{useState} from 'react'
import Link from 'next/link'

const ResetPassword = () => {
    const [password, setPassword] = useState(false)
    const [values, setValues] = useState(['', '', '', '']);

    const handleChange = (index, event) => {
        const { value } = event.target;
        const numberRegex = /^\d{0,1}$/; // Regular expression to allow only one digit
      
        if (numberRegex.test(value)) {
          const updatedValues = [...values];
          updatedValues[index] = value;
          setValues(updatedValues);
        }
      };
  return (
    <div className='bg-[#B7B7B7] h-screen flex justify-center items-center flex-col'>
          <div className='bg-white md:w-[500px] md:h-[500px] w-80 h-[350px] flex md:pt-10 pt-3 items-center flex-col rounded-xl pb-5'>
            <div className='w-full md:-mt-6 pl-4 '>
                <img src="/icons/frontend/back.svg" alt="" className={`h-6 w-6 cursor-pointer ${password === true ? "block" : "hidden"}`} onClick={()=>setPassword(false)}/>
            </div>
            <img src="/images/logo.svg" alt="" className={`md:w-56 ${password === false ? "mt-10 md:mt-6" : "" }`}/>
                <div className={`md:py-2 mt-2 md:text-3xl text-xl text-[poppins] ${password === true ? 'hidden' : 'block'}`}>
                    PASSWORD RETRIEVAL
                </div>
                <div className={`flex flex-col md:gap-36 gap-28 mt-6  items-center ${password === true ? 'hidden' : 'block'}`}>
                    <div className='border-b-1 border-[#885AF8] w-full md:w-auto'>
                        <input type="email" placeholder='Enter Your Email' className='border-2  md:w-[410px] w-72 md:h-[40px] border-none focus:outline-none' />
                    </div>
                    <div className='flex justify-center flex-col'>
                        <button className='bg-black  h-[40px] rounded-lg text-white text-2xl w-36' onClick={()=>setPassword(true)}>
                            Next
                        </button>
                    </div>
                </div>
                <div className={`flex  flex-col md:gap-12 gap-6 mt-6  items-center ${password === true ? 'block' : 'hidden'}`}>
                    <div>
                        <div className='text-xl text-[#90A087]'>
                            Enter the code sent to your phone
                        </div>
                        <div className='flex gap-4 items-center justify-center mt-10'>
                            {values.map((value, index) => (
                                <input
                                key={index}
                                type='text'
                                placeholder='-'
                                className='bg-[#D9D9D9] md:h-14 md:w-14 w-9 h-9 rounded-md border-none focus:outline-none text-center'
                                value={value}
                                onChange={(event) => handleChange(index, event)}
                                />
                            ))}
                            </div>
                        <div className='flex justify-end text-[#109CF1] w-full mt-7'>
                        Resend code
                        </div>
                    </div>
                    
                    <div className='flex justify-center flex-col'>
                        <button className='bg-black  h-[40px] rounded-lg text-white text-2xl w-36' onClick={()=>setPassword(true)}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ResetPassword
