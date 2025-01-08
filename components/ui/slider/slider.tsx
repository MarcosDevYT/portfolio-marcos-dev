"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import { dataCertificados } from "@/data";
import "./styles.css";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {dataCertificados.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="mx-auto my-12 w-[260px] md:w-[600px] h-[250px] md:h-[500px]">
              <Image
                width={1200}
                height={1400}
                src={item.src}
                alt={item.title}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
