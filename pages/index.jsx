import Navbar from '@/components/frontend/Navbar'
import LuxurySection from '@/components/frontend/home/Luxury-section'
import Seller from '@/components/frontend/home/Seller'
import React from 'react'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, { Pagination } from 'swiper/core';
import Footer from '@/components/frontend/Footer'

SwiperCore.use([Pagination]);
const index = () => {
  const lawnVariety=[
    {
      name:'Printed Lawn',
      image :'/icons/frontend/user-img/printed_lawn.svg'
    },
    {
      name:'Digital Printed Lawn',
      image:'/icons/frontend/user-img/digital_lawn.svg'
    },
    {
      name:'Embroidered Lawn',
      image:'/icons/frontend/user-img/emb_lawn.svg'
    },
    {
      name: 'EID Collection',
      image:'/icons/frontend/user-img/eid_lawn.svg'
    },
    {
      name: 'EID Collection',
      image:'/icons/frontend/user-img/eid_lawn.svg'
    },
    {
      name:'Digital Printed Lawn',
      image:'/icons/frontend/user-img/digital_lawn.svg'
    },
    ,
    {
      name:'Digital Printed Lawn',
      image:'/icons/frontend/user-img/digital_lawn.svg'
    },
    {
      name:'Embroidered Lawn',
      image:'/icons/frontend/user-img/emb_lawn.svg'
    },
    {
      name: 'EID Collection',
      image:'/icons/frontend/user-img/eid_lawn.svg'
    },
    {
      name: 'EID Collection',
      image:'/icons/frontend/user-img/eid_lawn.svg'
    },
    {
      name:'Digital Printed Lawn',
      image:'/icons/frontend/user-img/digital_lawn.svg'
    },
  ]
  
  const swiperRef = React.useRef(null);
  return (
    <div className='bg-white'>
      <Navbar />
      <div className="container mx-auto md:px-20 flex justify-around py-4 px-4 ">
      <Swiper
      slidesPerView={4}
      pagination={{ type: 'bullets', clickable: true }}
      navigation={{
        prevEl: '.custom-prev',
        nextEl: '.custom-next',
      }}
    >
        {
          lawnVariety.map((item,index) => (
            
            <SwiperSlide key={index}>
            <div className="flex items-center flex-col">
            <img src={item.image} alt="" className='w-20 h-20 md:w-auto md:h-auto' />
            <h5 className="text-center font-normal text-[Poppins] mt-2  md:text-2xl text-xs px-3 md:px-0 ">
              {item.name}
            </h5>
          </div>
          </SwiperSlide>
          ))
        }
        </Swiper>
       
      </div>
      <section className='banner w-full '>
        <img src="/icons/frontend/user-img/banner.svg" alt="" className='w-full' />
        <button className='absolute z-20 bg-[#D46E74] py-2 w-44 right-96 -bottom-56  rounded-sm text-white btn-zoom-effect md:block hidden'> Shopping now</button>
      </section>
      <div className='grid py-4 px-3 max-w-full grid-cols-2 md:grid-cols-4 gap-4'>
        <img src="/icons/frontend/user-img/lawn1.svg" alt="" className='zoom-effect' />
        <img src="/icons/frontend/user-img/lawn2.svg" alt="" className='zoom-effect' />
        <img src="/icons/frontend/user-img/lawn3.svg" alt="" className='zoom-effect' />
        <img src="/icons/frontend/user-img/lawn4.svg" alt="" className='zoom-effect' />
      </div>

      <LuxurySection />
      <section className='summer-banner py-6'> 
        <img src="/icons/frontend/user-img/summer_banner.svg" alt="" className='w-full' />
        <div className='grid grid-cols-3 gap-4 max-w-full px-3 py-4'>
          <img src="/icons/frontend/user-img/collection.svg" alt="" className='' />
          <img src="/icons/frontend/user-img/collection1.svg" alt="" className='' />
          <img src="/icons/frontend/user-img/collection2.svg" alt="" className='' />
        </div>
      </section>
      <Seller/>
      <section className="sales-off py-6">
        <img src="/icons/frontend/user-img/sales_off_banner.svg" alt="" className='' />
      </section>
      <section className='summer-banner py-6'>
        <h3  className='py-3 md:text-4xl  font-semibold text-[Montserrat] text-center'>Follow Us</h3>
        <img src="/icons/frontend/user-img/eid_luxury.svg" alt="" className='w-full' />
      </section>
      <Footer/>

    </div>
  )
}

export default index
