"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function App({ blogs }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className='image-container'
      >
        {blogs.thumbnail.map((thumbnail, id) => (
          <SwiperSlide key={id}>
            <img src={thumbnail} alt={blogs.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
