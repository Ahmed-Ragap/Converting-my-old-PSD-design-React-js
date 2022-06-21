import React from 'react';
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/autoplay';
import './style.css';
import carousel_img_3 from '../../img/3.jpg';
import carousel_img_3_ from '../../img/3_.jpg';
import carousel_img_4 from '../../img/4.jpg';
import carousel_img_4_ from '../../img/4_.jpg';
import carousel_img1_png from '../../img/feture_1.png';
import carousel_img2_png from '../../img/feture_2.png';
import carousel_img3_png from '../../img/feture_3.png';

export const Achievements = () => {
  return (
  <>
  <Swiper
    
        modules={[Navigation, Pagination ]}
        Autoplay={true}
        navigation={true}
        loop={true}
        effect="fade"
    >
<div className='_swiper_main' >
 

 <SwiperSlide>
<div className='_swiper p-5' data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine">
  <div className='overlay'></div>
  <div className='container text-center'>
    <div className='main'>
        <p>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto Ab Quibusdam Autem? Aut Cumque Soluta Eius Ex, Laudantium Dolorem Fuga Totam Perspiciatis Veniam Error Eaque Veritatis Odio Laboriosam A Quisquam Est Et Quia. Distinctio Vel Ipsa Aspernatur Natus. Minus Excepturi Blanditiis, Expedita Cum Quisquam Nobis Eaque, Ducimus Recusandae Id Architecto Minima Nostrum Repudiandae Atque. Labore Ipsum Corrupti Quam Repudiandae Eum Quaerat Magnam Nam Quod Assumenda Vitae. Consectetur,</p>
        <div className='image_info '>
        <img className='rounded_chap'  src= {carousel_img1_png} />
        <img className='rounded_chap mx-2'  src={carousel_img2_png} />
        <img className='rounded_chap'  src={carousel_img3_png} />
      </div>
    </div>

  </div>
</div>
 </SwiperSlide>

{/*  */}
<SwiperSlide>
<div className='_swiper sli2 p-5'>
<div className='overlay'></div>
  <div className='container text-center'>
  <div className='main'>
        <p>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto Ab Quibusdam Autem? Aut Cumque Soluta Eius Ex, Laudantium Dolorem Fuga Totam Perspiciatis Veniam Error Eaque Veritatis Odio Laboriosam A Quisquam Est Et Quia. Distinctio Vel Ipsa Aspernatur Natus. Minus Excepturi Blanditiis, Expedita Cum Quisquam Nobis Eaque, Ducimus Recusandae Id Architecto Minima Nostrum Repudiandae Atque. Labore Ipsum Corrupti Quam Repudiandae Eum Quaerat Magnam Nam Quod Assumenda Vitae. Consectetur,</p>
  <div className='image_info '>
  <img className='rounded_chap'  src= {carousel_img1_png} />
        <img className='rounded_chap mx-2'  src={carousel_img2_png} />
        <img className='rounded_chap'  src={carousel_img3_png} />
  </div>
    </div>
  </div>
</div>
 </SwiperSlide>
 {/*  */}
 <SwiperSlide>
<div className='_swiper sli3 p-5'>
<div className='overlay'></div>
  <div className='container text-center'>
  <div className='main'>
        <p>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Architecto Ab Quibusdam Autem? Aut Cumque Soluta Eius Ex, Laudantium Dolorem Fuga Totam Perspiciatis Veniam Error Eaque Veritatis Odio Laboriosam A Quisquam Est Et Quia. Distinctio Vel Ipsa Aspernatur Natus. Minus Excepturi Blanditiis, Expedita Cum Quisquam Nobis Eaque, Ducimus Recusandae Id Architecto Minima Nostrum Repudiandae Atque. Labore Ipsum Corrupti Quam Repudiandae Eum Quaerat Magnam Nam Quod Assumenda Vitae. Consectetur,</p>
  <div className='image_info '>
  <img className='rounded_chap'  src= {carousel_img1_png} />
        <img className='rounded_chap mx-2'  src={carousel_img2_png} />
        <img className='rounded_chap'  src={carousel_img3_png} />
  </div>
    </div>
  </div>
</div>
 </SwiperSlide>
 </div>

    </Swiper>


{/* <!-- our Achievements  --> */}
<div className="Achievements mb-5 pt-1">
  <div className="container  mb-5" >
    <h2 className="mb-4 pt-5 mb-5" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine">Achievements</h2>
    <div className="row  over"   data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine">
      <div className='over'></div> 
      <div className="col-md-6 col-lg-7 order-sm-1"   data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine">
        <div className="main pt-3">
          <h3 className="">Lorem <span className="color">ipsum dolor sit</span>, amet <br/>consectetur adipisicing.</h3>
          <span className="end d-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste sequi delectus aliquid quaerat architecto exercitationem voluptatem optio aperiam! Enim!</span>
          <div className="count d-flex justify-content-left my-4">
            <div className="count_1 co ">
              <h4 className="">10k+</h4>
              <span className=" ">companies</span>
            </div>
            <div className="count_2 co mx-5">
              <h4>370</h4>
              <span>templates</span>
            </div>
            <div className=" co count_3">
              <h4>12m</h4>
              <span>queries</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!--  --> */}
      <div className="col-md-6 col-lg-5 my-2 order-sm-3"   data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine">
        <div className="main  "> 
          <img className="w-100" src={carousel_img_3_} alt=""/>
        </div>  
      </div>
    </div>
    {/*  */}
    <div className="row  over my-4 "   data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine">
      <div className='over'></div> 
       {/* <!--  --> */}
       <div className="col-md-6 col-lg-5 my-2"   data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine">
        <div className="main  "> 
          <img className="w-100" src={carousel_img_4_} alt=""/>
        </div>  
      </div>
      {/*  */}
      <div className="col-md-6 col-lg-7 "   data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine">
        <div className="main pt-3">
          <h3 className="">Lorem <span className="color">ipsum </span>dolor sit, amet <br/>consectetur adipisicing.</h3>
          <span className="end d-block pb-4">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Omnis, Quasi Excepturi Totam Quae Tempora Sed Esse, Quas, Porro Ipsam Earum Reprehenderit. Cupiditate Impedit Nisi Assumenda Ullam 
          <br /> <br/>Voluptates, Facilis Repellat Reiciendis Laudantium Adipisci At Tenetur! Doloremque Est Exercitationem Perferendis,</span>
      
        </div>
      </div>
     
    </div>
  </div>
</div>

  </>
  )
}
