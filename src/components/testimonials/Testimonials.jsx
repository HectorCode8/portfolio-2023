import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/vic.jpg'
import AVTR2 from '../../assets/gus.jpg'
import AVTR3 from '../../assets/chris.jpg'
import AVTR4 from '../../assets/nelson.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Victor Contreras - Security Engineer',
    review: 'Great person, inside and outside the professional field. Someone you can trust to solve any obstacle. Highly recommended.'
  },
  {
    avatar: AVTR2,
    name: 'Guztavo Mazatan - Product Manager',
    review: 'From the start of the project, through to completion, Hector supported us and exceeded our expectations in every way. Not only was our experience personal and friendly, his ability to identify and present our key messages in an imaginative and creative way gave us a huge amount of confidence in him. In many ways Hector understood our clients website needs better than we did and he complimented our vision perfectly. He is reliable, professional and easy to work with. I can’t recommend him highly enough and we look forward to continuing our working relationship together.'
  },
  {
    avatar: AVTR3,
    name: 'Christopher Arteaga - Web Dev',
    review: 'Hector is a great help managing a very out of date website. Everything we ask him to do is done quickly and efficiently, we would be lost without him.'
  },
  {
    avatar: AVTR4,
    name: 'Nelson Gonzalez - Dev Ops',
    review: 'Hector is awesome, delivers exactly what you want and is a great guy as well, thanks for all your hard work on my website'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials