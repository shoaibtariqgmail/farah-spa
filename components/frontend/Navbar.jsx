import React,{useState} from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';


const Navbar = () => {
  const router = useRouter();
    const [show,setShow]=useState(true)
    const [setting,setSetting]=useState(false)
    const [showSidebar,setShowSidebar]=useState(false)
    const[search ,setSearch]=useState(false)
    const handleToggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }
    
  return (
    <>
    <nav className="bg-white flex py-4 justify-between px-4 z-50">
    <div className="flex items-center gap-4">
      <img
        src="/icons/frontend/user-img/toggle.svg"
        alt=""
        className="h-9 w-9 cursor-pointer md:hidden"
        onClick={handleToggleSidebar}
      />
      <img src="/icons/frontend/search.svg" alt="" className="h-9 w-9 cursor-pointer md:hidden" onClick={()=>setSearch(!search)}/>
      <div className={`bg-black w-full  text-white absolute  left-0 p-3 transition-all duration-500 ease-in-out ${search===true?'top-16':'-top-32'}`}>
        <div className="flex w-full justify-end">
          <img
            src="/icons/cross.svg"
            alt=""
            className="cursor-pointer h-6 w-6"
            onClick={()=>setSearch(!search)}
              />
          </div>
          <p className="text-xl font-normal text-[poppins]">What are you looking for?</p>
          <div className="border-b-1 border-gray-300 p-2  flex items-center justify-between">
            <input type="text" className="border-none focus:outline-none bg-transparent" placeholder="Search for products, brands and more..." />
            <img src="/icons/frontend/white_search.svg" alt="" className="" />
          </div>
      </div>
      <div
        className={`bg-black w-48 h-auto text-white text-center pt-4 absolute top-14  transition-all duration-500 ease-in-out ${
          showSidebar === true ? 'left-0' : '-left-56'
        }`}
      >
        <ul>
          <li className="flex text-right justify-end pb-3">
            <div className="border-solid rounded-full mr-3 border-2 border-white">
              <img
                src="/icons/cross.svg"
                alt=""
                className="cursor-pointer h-6 w-6"
                onClick={handleToggleSidebar}
              />
            </div>
          </li>
          <hr className="text-white" />
          <Link href={"/printed-lawn"}>
            <li className={`text-white text-center hover:bg-gray-400 py-4 text-sm cursor-pointer  `}>PRINTED LAWN</li>
          </Link>
          <hr className="text-white" />
          <li className="text-white text-center cursor-pointer hover:bg-gray-400 py-4 text-sm">
            DIGITAL PRINTED LAWN
          </li>
          <hr className="text-white" />
          <li className="text-white text-center cursor-pointer hover:bg-gray-400 py-4 text-sm">EMBROIDERED LAWN</li>
          <hr className="text-white" />
          <li className="text-white text-center cursor-pointer hover:bg-gray-400 py-4 text-sm">EID COLLECTION</li>
          <hr className="text-white" />
        </ul>
      </div>
    </div>
     <div className='flex md:pl-[20%]' >
        <img src="/images/logo.svg" alt="" />
     </div>

     <div className='flex items-center justify-between gap-6 '>
       <img src="/icons/frontend/search.svg" alt="" className='h-9 w-9 cursor-pointer md:block hidden ' onClick={()=>setSearch(!search)} />
       <Link href="/wishlist">
       <img src="/icons/frontend/heart_icon.svg" alt="" className='h-9 w-9 cursor-pointer md:block hidden ' />
       </Link>
       <img src="/icons/frontend/setting_icon.svg" alt="" className='h-9 w-9 cursor-pointer' onClick={()=>setSetting(!setting)} />
       <div className={`absolute bg-black w-60  transition-all duration-500 ease-in-out  md:right-20 right-12 ${setting === true ? 'top-16':'-top-48'}`}> 
          <ul className='flex flex-col gap-2 text-white '>
            <Link href={"/profile"}>
              <li className='text-white text-center hover:bg-gray-400 text-2xl cursor-pointer py-2'>My Account</li>
            </Link>
            <hr  className="text-gray-300"/>
            <Link href="/wishlist">
              <li className='text-white text-center cursor-pointer hover:bg-gray-400  text-2xl py-2'>WishList</li>
            </Link>
            <hr  className="text-gray-300"/>
            <li className='text-white text-center cursor-pointer hover:bg-gray-400  text-2xl py-2'>
              <Link href="/login"> Login</Link>
            </li>
            </ul>
       </div>
       <Link href="/cart">
        <img src="/icons/frontend/bag.svg" alt="" className='h-9 w-9 cursor-pointer' />
       </Link>
     </div>
    </nav>
      <div className={`bg-black flex pl-24 collection  ${show === true ? 'block transition-all duration-500 ease-in-out' : 'hidden'}`}> 
        <ul className="flex justify-between items-center py-2 w-full px-6">
        <Link href="/">
          <li className={`mr-4 cursor-pointer ${router.pathname === "/" ? "text-orange-500" : "text-white hover:text-orange-500"}`}>
            Home
          </li>
        </Link>
        
          <Link href="/printed-lawn">
            <li className={`mr-4 cursor-pointer ${router.pathname === "/printed-lawn" ? "text-orange-500" : "text-white hover:text-orange-500"}`}>
                Printed Lawn
            </li>
          </Link>
            <li className={`mr-4 text-white hover:text-orange-500 cursor-pointer`}>
                Digital Printed Lawn
            </li>
            <li className="mr-4 text-white hover:text-orange-500 cursor-pointer">
            Embroidered Lawn
          </li>
            <li className="mr-4 text-white hover:text-orange-500 cursor-pointer">
              EID Collection
        
          </li>
          <li className='cursor-pointer' onClick={()=>setShow(false)}>
            <img src="/icons/cross.svg" alt="" />
          </li>
        </ul>
    </div>
  </>
  );
};

export default Navbar;
