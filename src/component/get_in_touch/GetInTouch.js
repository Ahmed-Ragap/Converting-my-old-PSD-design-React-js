import React from 'react'
import './style.css' ;
export const GetInTouch = () => {
  return ( 
    <div>
      <footer  >
  <div className="container">
    <h2  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">get in tuch with me </h2>
    <div className="row mb-5">
      <div className="col-md-6 col-lg-5 mt-5">
        <div className="main"  data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine">
          <div className="info">
                  <i className="fa-solid fa-location-dot"></i>
                   <span>123 rev auern, kotbagen chekal 1205 BD</span>
          </div>
          <div className="info py-2">
            <i className="fa-solid fa-phone"></i> 
            <span>+81129132848429</span>
          </div>
          <div className="info">
            <i className="fa-solid fa-mobile-screen-button"></i>
             <span> +81129132848454</span>
          </div>
          <div className="socail py-4" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
            <a href="#"><i className="fa-brands fa-facebook-square"></i></a>
            <a href="#"><i className="fa-brands fa-twitter-square"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-google-plus-square"></i></a>
          </div>
          {/* <!-- google map --> */}
          <iframe  data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" frameBorder="0" scrolling="yes" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20al%20wasta+()&amp;t=h&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>  
     
        </div>
      </div>
      {/* <!-- right col --> */}
      <div className="col-md-6 col-lg-7 ">
        <div className="main mt-5" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
          <h4>leave us message</h4>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea type="text" placeholder="write your message here"></textarea>
          <input type="submit" value="submit" data-aos="fade-down-left"  data-aos-easing="ease-in-sine" /> 
        </div>
      </div>
    </div>
  </div>
  <div className="copy_right " data-aos="fade-up"  data-aos-offset="10" data-aos-easing="ease-in-sine">
    <span>all &copy; reserved</span>
    <a href="https://www.linkedin.com/in/ahmed-ragab24/" target="_blank">ahmed ragab</a>
  </div>
</footer>

    </div>
  )
}
