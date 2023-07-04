import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);
const LuxurySection = () => {
    const Luxury = [
        {
            id:1,
            img:'/icons/frontend/user-img/luxury_lawn.svg',
            title:'Lawn Suits Unstitched 3 Piece',
            price:'Rs.6,500.00 PKR',
            discount:'Rs.7,500.00 PKR'
        },
        {
            id:2,
            img:'/icons/frontend/user-img/luxury_lawn2.svg',
            title:'Farah Embroidered Lawn Suits Unstitched 3 Piece',
            price:'Rs.6,500.00 PKR',
            discount:'Rs.7,500.00 PKR'
        },
        {
            id:3,
            img:'/icons/frontend/user-img/luxury_lawn.svg',
            title:'Lawn Suits Unstitched 3 Piece',
            price:'Rs.6,500.00 PKR',
            discount:'Rs.7,500.00 PKR'
        },
        {

            id:4,
            img:'/icons/frontend/user-img/luxury_lawn2.svg',
            title:'Lawn Suits Unstitched 3 Piece',
            price:'Rs.6,500.00 PKR',
            discount:'Rs.7,500.00 PKR'
        },
        {
            id:5,
            img:'/icons/frontend/user-img/luxury_lawn.svg',
            title:'Lawn Suits Unstitched 3 Piece',
            price:'Rs.6,500.00 PKR',
            discount:'Rs.7,500.00 PKR'
        },
    ]
    const goPrev = () => {
        if (swiperRef && swiperRef.current) {
          swiperRef.current.swiper.slidePrev();
        }
      };
      
      const goNext = () => {
        if (swiperRef && swiperRef.current) {
          swiperRef.current.swiper.slideNext();
        }
      };
      
      const swiperRef = React.useRef(null);
  return (
    <div className='w-full text-center my-8'>
        <h3  className='py-3 md:text-4xl text-2xl font-semibold text-[Montserrat]'>LUXURY COLLECTION</h3>
        <button className='bg-transparent border-none md:text-2xl pb-3'>
            <span className='border-b-1 border-black'>View All</span>
        </button>
        <div>
      <div className='md:hidden '>
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={3}
            bullet
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
          >
            {Luxury.map((item) => (
              <SwiperSlide key={item.id}>
                <div className='flex flex-col items-center'>
                  <img src={item.img} alt='' className='zoom-effect' />
                  <div>
                    <h2 className='flex justify-center px-2 text-[Montserrat] text-xl font-medium py-2'>
                      {item.title}
                    </h2>
                    <div className='flex justify-between text-sm px-4'>
                      <del className='md:block hidden'>{item.discount}</del>
                      <span className='text-center w-full'>{item.price}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <button className='custom-prev absolute left-0 -mt-72 bg-white  p-2 rounded-md z-40' onClick={goPrev} >
            <img src='/icons/frontend/back.svg' alt='' />
          </button>
          <button className='custom-next absolute right-0 -mt-72 bg-white  p-2 rounded-md z-40'       onClick={goNext}>
            <img src='/icons/frontend/back.svg' alt='' className='transform rotate-180' />
          </button>
          </Swiper>
      </div>
     
    </div>
        <div className='w-full md:block hidden'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-6 '>
                {Luxury.map((item) => (
                    <div key={item.id} className='flex flex-col items-center'>
                    <img src={item.img} alt="" className='zoom-effect' />
                        <div>
                            <h2 className='flex justify-center px-2 text-[Montserrat] text-xl font-medium py-2'>{item.title}</h2>
                            <div className='flex justify-between text-sm px-4'>
                            <del className='md:block hidden'>{item.discount}</del>
                            <span>{item.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default LuxurySection
