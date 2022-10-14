import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../Components/Images/slider1.png";
import Image2 from "../Components/Images/slider2.png";
import Image3 from "../Components/Images/slider3.png";
import Image4 from "../Components/Images/slider4.png";
import Image5 from "../Components/Images/slider5.png";
import Image6 from "../Components/Images/slider6.png";
import Image7 from "../Components/Images/slider7.png";
import Image8 from "../Components/Images/slider8.png";
import Image9 from "../Components/Images/slider9.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider1.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <section>
      <div className="container py-5">
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
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Image1} alt="" className="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image2} alt="" className="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image3} alt="" className="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image4} alt="" className="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image5} alt="" className="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image6} alt="" className="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image7} alt="" className="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={Image8} alt="" className="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image9} alt="" className="slider1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

// import React from "react";
// import Video from "../Components/Images/high.mp4";

// export default function Slider1() {
//   return (
//     <section>
//       <div className="video">
//         <video src={Video} loop="true" autoplay="autoplay" muted />
//       </div>
//     </section>
//   );
// }
