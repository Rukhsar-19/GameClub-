import React from 'react'
import "../Styles/Marketplace.css";
import "swiper/css";
  //  import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
 import { Navigation,EffectCoverflow } from 'swiper/modules';
 import marketslidepic1 from "../Assests/marketslidepic1.webp";
 import arrows from "../Assests/arrows.webp";
 import vector2full from "../Assests/vector2full.webp";
  import market4 from "../Assests/market4.webp";
 import market3 from "../Assests/market3.webp";
 import market5 from "../Assests/market5.webp";
  import market6 from "../Assests/market6.webp";
//  coverfloweffect
import  'swiper/css/effect-coverflow'; 

const Marketplace = () => {
  return (
    <section className="marketplace main-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="markethead">
                        <h2 className="marketh  main-heading">Market Place</h2>
                        <p className="marketpara  main-paragraph">Lorem ipsum dolor sit amet consectetur. Quam enim ut rutrum neque viverra placerat facilisis. Donec mi morbi in amet gravida euismod amet. </p>

                    </div>

                </div>
                {/* swipercol */}
                <div className="col-lg-12">
                     <Swiper
            
             effect={'coverflow'}
             grabCursor={true}
            
            //    navigation={true}
                   modules={[Navigation,EffectCoverflow]}

                    
                  //
               spaceBetween={0}
              slidesPerView={4}
              centeredSlides={true}
              
              //   pagination={{ clickable: true }}
              //   autoplay={{ delay: 5000 }}
              loop={true}
              // coverfloweffgect
           coverflowEffect={
            {
              rotate:0,
              stretch:0,
              depth:100,
              modifier:2.5,

            }
           }
          


              // coverfloweffect
   navigation={{
    nextEl: '.coustom-next',
    prevEl: '.coustom-prev',
  }}
              className="mySwiper"
              // breakpoints  
  //                           breakpoints={{
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //   },
  //   430: {
  //     slidesPerView: 1,
  //     spaceBetween: 15,
  //   },
  //   932: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   1024: {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //   },
  // }}
// end breakpoints
 
  
            >
            
           <SwiperSlide>
            <div className="backgroundgrey  marketslides">
    <div className="imagecontainer imagemarket">
        <img src={marketslidepic1} />

    </div>
    <div className="spacesupermacy">
        <h2 className="spacehead  nospace">BASSASSIN QUEST PACK</h2>
        <p className="marketslidepara">Fortune</p>
        <div className="price-row">
  <div className="price-left">
    <span className="price-label">Price</span>
    <span className="price-value">RS1500</span>
  </div>
  <div className="gift">
    <p className="pergift">Pergift</p>
  </div>
</div>

{/* btunn */}
<div className="marketbutton">
     <button  className="round-button  linearcolor longbtn">Buy Now</button>

</div>


    </div>


</div>

</SwiperSlide>

            {/* 2nd slide start */}
                      
           <SwiperSlide>
            <div className="backgroundgrey  marketslides">
    <div className="imagecontainer imagemarket">
        <img src={market6} />

    </div>
    <div className="spacesupermacy">
        <h2 className="spacehead  nospace">BASSASSIN QUEST PACK</h2>
        <p className="marketslidepara">Fortune</p>
        <div className="price-row">
  <div className="price-left">
    <span className="price-label">Price</span>
    <span className="price-value">RS1500</span>
  </div>
  <div className="gift">
    <p className="pergift">Pergift</p>
  </div>
</div>

{/* btunn */}
<div className="marketbutton">
     <button  className="round-button  linearcolor longbtn">Buy Now</button>

</div>


    </div>


</div>

</SwiperSlide>        
    
            
{/* 2nd swiper end */}

{/* 3rd slide */}
 
              
           <SwiperSlide>
            <div className="backgroundgrey  marketslides">
    <div className="imagecontainer imagemarket">
        <img src={market4} />

    </div>
    <div className="spacesupermacy">
        <h2 className="spacehead  nospace">BASSASSIN QUEST PACK</h2>
        <p className="marketslidepara">Fortune</p>
        <div className="price-row">
  <div className="price-left">
    <span className="price-label">Price</span>
    <span className="price-value">RS1500</span>
  </div>
  <div className="gift">
    <p className="pergift">Pergift</p>
  </div>
</div>

{/* btunn */}
<div className="marketbutton">
     <button  className="round-button  linearcolor longbtn">Buy Now</button>

</div>


    </div>


</div>

</SwiperSlide>

{/* 3rd slide */}
{/* 4th slide */}

           
           <SwiperSlide>
            <div className="backgroundgrey  marketslides">
    <div className="imagecontainer imagemarket">
        <img src={market5} />

    </div>
    <div className="spacesupermacy">
        <h2 className="spacehead  nospace">BASSASSIN QUEST PACK</h2>
        <p className="marketslidepara">Fortune</p>
        <div className="price-row">
  <div className="price-left">
    <span className="price-label">Price</span>
    <span className="price-value">RS1500</span>
  </div>
  <div className="gift">
    <p className="pergift">Pergift</p>
  </div>
</div>

{/* btunn */}
<div className="marketbutton">
     <button  className="round-button  linearcolor  longbtn">Buy Now</button>

</div>


    </div>


</div>

</SwiperSlide>

{/* 4thslide */}
{/* 5th slide */}

           
           <SwiperSlide>
            <div className="backgroundgrey  marketslides">
    <div className="imagecontainer imagemarket">
        <img src={market3} />

    </div>
    <div className="spacesupermacy">
        <h2 className="spacehead  nospace">BASSASSIN QUEST PACK</h2>
        <p className="marketslidepara">Fortune</p>
        <div className="price-row">
  <div className="price-left">
    <span className="price-label">Price</span>
    <span className="price-value">RS1500</span>
  </div>
  <div className="gift">
    <p className="pergift">Pergift</p>
  </div>
</div>

{/* btunn */}
<div className="marketbutton">
     <button  className="round-button  linearcolor longbtn">Buy Now</button>

</div>


    </div>


</div>

</SwiperSlide>

{/* 5th slide */}
   
   {/* controller*/}

<div className="slider-controller">
 <div className="swiper-button-prev   coustom-prev">
  <img src={arrows} width={20}/>
</div>

   <div className="swiper-button-next   coustom-next">
     <img src={vector2full}  width={20}/>
      
  </div>

</div>




   {/* controller */}
            

                  
             
             
            </Swiper>

                </div>
   



{/* swipercolend */}
            </div>

        </div>


    </section>
  )
}

export default Marketplace