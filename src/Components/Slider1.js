import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../Components/Images/image-1.avif";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider1.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <section>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

{/* import React from "react";
import Video from "../Components/Images/high.mp4";

export default function Slider1() {
  return (
    <section>
      <div>
        <video src={Video} loop="true" autoplay="autoplay" muted />
      </div>
    </section>
  );
}
 */}