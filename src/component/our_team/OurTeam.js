import React from 'react';
import './style.css';
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/autoplay';
import featur_2 from '../../img/feture_2.png';
import featur_3 from '../../img/feture_3.png'; 

 export const OurTeam =() => {

  return (
 <>
    
{/* <!-- start our team --> */}
<div className="team py-5 px-4">
  <div className="container text-left">
    <h2 className=" mb-4"   data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine">our team</h2>

     <div className="row "> 
     <Swiper
        breakpoints={{
         
         1000: {
            width:1000,
            slidesPerView: 2,
          },
          1200: {
            width:1200,
            slidesPerView: 2,
          },
        }}
        modules={[Navigation, Pagination ]}
        spaceBetween={20}
        Autoplay={true}
        navigation={true}
        loop={true}
        effect="fade"
    >
      <SwiperSlide>
  <div className="item"  data-aos="fade-down" 	 data-aos-offset="200" data-aos-easing="ease-in-sine">
    <div className="main d-flex">
      <img className="me-3 rounded-start" src={featur_2} alt=""/>
      <div className="right_info ">
        <h4 className="">lorem</h4>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum reprehenderit eligendi molestiae voluptatem libero, velit modi animi consectetur quidem recusandae exercitationem! Dicta ea nisi, minima libero placeat dolorem! Obcaecati.</span>
       <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
       </div>
      </div>
    </div>
    {/* <!--  --> */}
    <p className="pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi dicta maxime distinctio rerum minima. Ratione itaque minima, eius ad porro quos quis obcaecati cumque architecto animi deleniti minus distinctio atque id ullam dignissimos ea asperiores iusto quasi fugit repellendus fuga tempora! Ex cumque, recusandae amet totam alias explicabo omnis odio eaque aliquid illum perferendis magni delectus mollitia? Accusantium magnam quaerat, accusamus nisi quod dignissimos tempora assumenda libero non necessitatibus, ipsa deleniti suscipit ducimus nemo repellat eveniet quisquam voluptatum qui!</p>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="item"  data-aos="fade-down" 	 data-aos-offset="200" data-aos-easing="ease-in-sine">
    <div className="main d-flex">
      <img className="me-3 rounded-start" src={featur_2} alt=""/>
      <div className="right_info ">
        <h4 className="">lorem</h4>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum reprehenderit eligendi molestiae voluptatem libero, velit modi animi consectetur quidem recusandae exercitationem! Dicta ea nisi, minima libero placeat dolorem! Obcaecati.</span>
       <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
       </div>
      </div>
    </div>
    {/* <!--  --> */}
    <p className="pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi dicta maxime distinctio rerum minima. Ratione itaque minima, eius ad porro quos quis obcaecati cumque architecto animi deleniti minus distinctio atque id ullam dignissimos ea asperiores iusto quasi fugit repellendus fuga tempora! Ex cumque, recusandae amet totam alias explicabo omnis odio eaque aliquid illum perferendis magni delectus mollitia? Accusantium magnam quaerat, accusamus nisi quod dignissimos tempora assumenda libero non necessitatibus, ipsa deleniti suscipit ducimus nemo repellat eveniet quisquam voluptatum qui!</p>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="item"  data-aos="fade-down" 	 data-aos-offset="200" data-aos-easing="ease-in-sine">
    <div className="main d-flex">
      <img className="me-3 rounded-start" src={featur_3} alt=""/>
      <div className="right_info ">
        <h4 className="">lorem</h4>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum reprehenderit eligendi molestiae voluptatem libero, velit modi animi consectetur quidem recusandae exercitationem! Dicta ea nisi, minima libero placeat dolorem! Obcaecati.</span>
       <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
       </div>
      </div>
    </div>
    {/* <!--  --> */}
    <p className="pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi dicta maxime distinctio rerum minima. Ratione itaque minima, eius ad porro quos quis obcaecati cumque architecto animi deleniti minus distinctio atque id ullam dignissimos ea asperiores iusto quasi fugit repellendus fuga tempora! Ex cumque, recusandae amet totam alias explicabo omnis odio eaque aliquid illum perferendis magni delectus mollitia? Accusantium magnam quaerat, accusamus nisi quod dignissimos tempora assumenda libero non necessitatibus, ipsa deleniti suscipit ducimus nemo repellat eveniet quisquam voluptatum qui!</p>
  </div>
  </SwiperSlide>
  {/* <!--  --> */}
  <SwiperSlide>
  <div className="item" 	 data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
    <div className="main d-flex">
      <img className="me-3 rounded-start" src={featur_2} alt=""/>
      <div className="right_info ">
        <h4 className="">lorem</h4>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum reprehenderit eligendi molestiae voluptatem libero, velit modi animi consectetur quidem recusandae exercitationem! Dicta ea nisi, minima libero placeat dolorem! Obcaecati.</span>
       <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        {/* <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i> */}
        <i className="fa-solid fa-star-half-stroke"></i>
       </div>
      </div>
    </div>
    {/* <!--  --> */}
    <p className="pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi dicta maxime distinctio rerum minima. Ratione itaque minima, eius ad porro quos quis obcaecati cumque architecto animi deleniti minus distinctio atque id ullam dignissimos ea asperiores iusto quasi fugit repellendus fuga tempora! Ex cumque, recusandae amet totam alias explicabo omnis odio eaque aliquid illum perferendis magni delectus mollitia? Accusantium magnam quaerat, accusamus nisi quod dignissimos tempora assumenda libero non necessitatibus, ipsa deleniti suscipit ducimus nemo repellat eveniet quisquam voluptatum qui!</p>
  </div>
  </SwiperSlide>
  {/* <!--  --> */}
    </Swiper>;
    </div>
  
  </div> 
</div>

{/* <!--start  how we do it --> */}
<div className="how_we_do_it">
  <div className="container  px-2">
    <h2 className="mb-2"  data-aos="fade-down"  data-aos-easing="ease-in-sine"> how we do <span className="">it</span></h2>
    <div className="row">
      <div className="col-sm-12"  data-aos="fade-up"  data-aos-easing="ease-in-sine">
        <h3 className="fw-bold">Lorem ipsum dolor sit <br/>amet consectetur.</h3>
        <span className="bg-info p-1 ">Lorem, ipsum dolor.</span>
        <button className="d-block btn btn-info my-3"><a href="#" className="text-decoration-none text-white">more →</a></button> 
      </div>  
    </div>
  </div>
</div>









 </>
  )
}

