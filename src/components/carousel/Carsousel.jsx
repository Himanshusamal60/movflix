import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


function Carsousel() {
  return (
    <>
      <div className="carouselimg ">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
        
      >
        <SwiperSlide>
        <img classname=' img-fluid '
              className="carouselImg"
              src="https://images5.alphacoders.com/403/403408.jpg"
              alt=""
            /></SwiperSlide>
        <SwiperSlide>
  <img classname='img-fluid'
              className="carouselImg"
              src="https://www.pixelstalk.net/wp-content/uploads/images6/4K-Star-Wars-HD-Wallpaper-Free-download.jpg"
              alt=""
            /></SwiperSlide>
        <SwiperSlide> <img classname='img-fluid'
              className="carouselImg"
              src="https://p4.wallpaperbetter.com/wallpaper/722/187/743/despicable-me-2-minions-wallpaper-preview.jpg"
              alt=""
            />
</SwiperSlide>
        <SwiperSlide> <img classname='img-fluid'
              className="carouselImg"
              src="https://images.alphacoders.com/112/thumb-1920-1124633.jpg"
              alt=""
            />
</SwiperSlide>
      
      </Swiper>
{/*         
        <div>
          <div className="container d-inline carcouselTitleBg fs-5 fw-bold  carouselDetails">
            <div className="row mb-3">
              <div className="col text-white-50">Title</div>
            </div>
            <div className="row  mb-3">
              <div className="col text-white-50">Genure</div>
              <div className="col text-white-50">date</div>
              <div className="col text-white-50">rateing</div>
            </div>
          
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Carsousel;
