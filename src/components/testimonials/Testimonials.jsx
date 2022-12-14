import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'
// import Swiper core and required modules
import {  Pagination,  A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

const data=[
    {
        avatar:AVTR1,
        name:'sudipa kundu',
        review:'lkwejfclisjfipjfskdrfp[rkfr[krekferkf[prkf[pkrpgkrirehgghoewrgr',
    },
    {
        avatar:AVTR2,
        name:'ram paul',
        review:'lkwejfclisjfipjfskdrfp[rkfr[krekferkf[prkf[pkrpgkrirehgghoewrgr',
    },
    {
        avatar:AVTR3,
        name:'kevin chirag',
        review:'lkwejfclisjfipjfskdrfp[rkfr[krekferkf[prkf[pkrpgkrirehgghoewrgr',
    },
    {
        avatar:AVTR4,
        name:'paul walker',
        review:'lkwejfclisjfipjfskdrfp[rkfr[krekferkf[prkf[pkrpgkrirehgghoewrgr'
    }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {
          data.map(({avatar,name,review},index)=>{
            return(
          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}/>
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }

        
      </Swiper>
    </section>
  )
}

export default Testimonials