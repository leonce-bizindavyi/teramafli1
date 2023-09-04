import React, { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function SwipperSlide() {
  const [videos, setVideos] = useState([])

  const fetchVideos = async () =>{
      const response = await fetch(`/api/posts/slides/0/20`)
      const data = await response.json()
      if(data[0]) setVideos(data)
  }
  useEffect(() => {
    fetchVideos()
  }, [])
  
  return (
    <>
      <Swiper
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
        }}
        navigation={true} 
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 7,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
            videos.map(video=>{
                return (
                    <SwiperSlide  key={video.ID}><Slide video={video} /></SwiperSlide>
                )
            })
        }
      </Swiper>
    </>
  );
}










/* import React,{useState,useEffect} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import Slide from './Slide'
import Head from 'next/head'
function SwipperSlide() {
  const [videos, setVideos] = useState(null)

  const fetchVideos = async () =>{
      const response = await fetch(`/api/posts/slides/0/6`)
      const data = await response.json()
      console.log(data)
      if(data[0]) setVideos(data)
  }
  useEffect(() => {
    
  }, [])
  
  useEffect(() => {
    fetchVideos()
  }, [])
  if(!videos) return null
  return (
    <>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    {/* <div className="filmslide  ">
      <div className="slidecontainer swiper ">
          <div className="swiper-wrapper mb-2 w-[100%] ">
              <div className="swiper-slide">
                {
                    videos.map(video=>{
                        return (
                            <div className="videocontainer ">
                    <div className=" w-full lg:w-[180px]  h-[170px] rounded   overflow-hidden">
                        <a href="#">
                            <img src="img/2.jpg" className="w-full img-fluid  h-[100%] object-cover"/>
                        </a>
                    </div>
                    <a href="#">
                        <div className="flex  justify-start mb-4 space-x-1">
                            <img className="lg:w-9 w-9 lg:h-9 h-9 my-1 ml-15 rounded-full " src="img/logo.png"/>
                            <div className="">
                                <div className="right-1 flex flex-col  ">
                                    <h10 className="text-sm font-medium">Title</h10>
                                    <span className="text-sm">Brave</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                        )
                    })
                }
            </div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </div> 
      </div> 
    </>
  )
}

export default SwipperSlide */