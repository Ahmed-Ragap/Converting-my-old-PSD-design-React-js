import React from "react";
import './style.css';
import feture_1 from '../../img/feture_1.png';
import feture_2 from '../../img/feture_2.png';
import feture_3 from '../../img/feture_3.png';
import feture_4 from '../../img/feture_4.png';
import about from '../../img/about.png';
export const Features = () =>{
    return (  
        <> 
<div className="top_landpage py-4 px-5">
 <div className="overlay"></div>
 <div className="main py-4">
  <h2 className="display-5 text-white mb-4"  data-aos="fade-down-right" data-aos-easing="ease-in-sine">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis <sapn className='py-1 text-info rounded bg-white px-3'>dolor praesentium</sapn></h2>
  <p className=""  data-aos="fade-up-left"  data-aos-easing="ease-in-sine">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Omnis, Quasi Excepturi Totam Quae Tempora Sed Esse, Quas, Porro Ipsam Earum Reprehenderit. Cupiditate Impedit Nisi Assumenda Ullam Voluptates, Facilis Repellat Reiciendis Laudantium Adipisci At Tenetur! Doloremque Est Exercitationem Perferendis, Odit Vero Iusto Nisi Quaerat Rerum Sint Aperiam, Et Ullam Adipisci Culpa Veniam Magni Deserunt Illo! Deleniti Optio Nihil Recusandae Reprehenderit Perferendis Natus Nostrum Labore Alias! Facilis Quis Magnam Rerum Ipsum Quo Consequatur Commodi Impedit Error Laborum 
  <br />
  <br />
  Quasi Molestias Natus Odio Beatae Et Pariatur Qui Architecto, Nobis Optio In Dignissimos. Quisquam Veniam Eaque, Aliquid Laudantium Quod Sunt Suscipit Sapiente Autem Cupiditate Voluptatum Iste
  <br />  <br />
  Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Omnis, Quasi Excepturi Totam Quae Tempora Sed Esse, Quas, Porro Ipsam Earum Reprehenderit. Cupiditate Impedit Nisi Assumenda Ullam Voluptates, Facilis Repellat Reiciendis Laudantium Adipisci At Tenetur! Doloremque Est Exercitationem Perferendis, Odit Vero Iusto Nisi Quaerat Rerum Sint Aperiam, Et Ullam Adipisci Culpa Veniam Magni Deserunt Illo! Deleniti Optio Nihil Recusandae Reprehenderit Perferendis Natus Nostrum Labore Alias! Facilis Quis Magnam Rerum Ipsum Quo Consequatur Commodi Impedit Error Laborum Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Omnis, Quasi Excepturi Totam Quae Tempora Sed Esse, Quas, Porro Ipsam Earum Reprehenderit. Cupiditate Impedit Nisi Assumenda Ullam Voluptates, Facilis Repellat Reiciendis Laudantium Adipisci At Tenetur! Doloremque Est Exercitationem Perferendis, Odit Vero Iusto Nisi Quaerat Rerum Sint Aperiam, Et Ullam Adipisci Culpa Veniam Magni Deserunt Illo! Deleniti Optio Nihil Recusandae Reprehenderit Perferendis Natus Nostrum Labore Alias! Facilis Quis Magnam Rerum Ipsum Quo Consequatur Commodi Impedit Error Laborum </p>
 </div>

</div>
{/* <!-- features --> */}
<div className="fetures ">
  <div className="container text-center text-md-start  ">
    <h2 className="title mb-3  pt-4 pb-0" data-aos="fade-up" data-aos-easing="ease-in-sine"> features</h2>
    <div className="row">
      <div className="col-md-6 col-lg-3 mb-5"   data-aos="fade-up"  data-aos-easing="ease-in-sine">
        <div className="main ">
          <img src={feture_1} alt=""/>
          <h3 className="heading">ui ux designing</h3>
          <p className="text-muted ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos amet dolores commodi quia eveniet eligendi beatae perferendis minima harum recusandae.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mb-5"   data-aos="fade-right"data-aos-easing="ease-in-sine">
        <div className="main ">
        <img src={feture_2} alt=""/>
          <h3 className="heading">ui ux designing</h3>
          <p className="text-muted ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos amet dolores commodi quia eveniet eligendi beatae perferendis minima harum recusandae.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mb-5"   data-aos="fade-down"data-aos-easing="ease-in-sine">
        <div className="main ">
          <img src={feture_3} alt=""/>
          <h3 className="heading">ui ux designing</h3>
          <p className="text-muted ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos amet dolores commodi quia eveniet eligendi beatae perferendis minima harum recusandae.</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mb-5 "   data-aos="fade-right" data-aos-easing="ease-in-sine">
        <div className="main ">
          <img src={feture_4} alt=""/>
          <h3 className="heading">ui ux designing</h3>
          <p className="text-muted ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos amet dolores commodi quia eveniet eligendi beatae perferendis minima harum recusandae.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="about mb-5">
  <div className="container text-start">
    <div className="row">
      <div className=" col-sm-12 col-lg-7 text-center"   data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <img src={about} alt=""/>
      </div>
      <div className="col-lg-5 pt-3"   data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
       <div className="main">
        <h2 className="mb-2">about</h2>
        <p className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, possimus. Obcaecati nobis omnis, illum dolores nam consequatur aut quas hic possimus doloribus dolore tempora! Voluptatibus soluta quod, alias exercitationem debitis unde dolorem et corrupti magni, totam deserunt laboriosam quia at accusantium. Iste sapiente dolorem perferendis excepturi expedita eius nostrum, a distinctio.<br/> Quisquam facere odio itaque quibusdam nobis illo iure dolorem ducimus officiis corporis obcaecati rerum nulla consectetur fugit, dolore <br/>placeat eius sunt aut est excepturi non? Sunt qui quas possimus a natus et aspernatur aliquam, nam commodi, culpa fugiat exercitationem placeat sapiente distinctio, accusamus aperiam officia temporibus id facilis. Quaerat dolores nemo quis possimus deleniti a ipsa maxime fugit atque, eaque nam at eius quisquam dolore quos sit? Illum, corporis in</p>
        <button className="btn btn-info p-2 px-4"> <a href="#" className=" text-white ">click me</a> </button>
       </div>
      </div>
    </div>
  </div>
</div>
   
      </>
    )
}
