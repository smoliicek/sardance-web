'use client'

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '@/swiper.css';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Gallerie() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const router = useRouter();

  return (
    <>
      <button
      // ano, predpokladam ze prisel z galerie, jinak se povesim
        onClick={() => router.back()}
        className="back-button text-black bg-gray-200 rounded-full px-4 py-2 mb-4 lg:mb-0 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300"
      >
        Zpět
      </button>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
      </Swiper>
      <style jsx>{`
        .back-button {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 1000;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
