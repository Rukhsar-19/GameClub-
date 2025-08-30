import React from 'react'
import "../Styles/Download.css";

//   import headerlogo from "../Assests/headerlogo.webp";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
 import { Navigation } from 'swiper/modules';
    import instantgamepic1 from "../Assests/instantgamepic1.webp";
   import instantgamepic2 from "../Assests/instantgamepic2.webp";
   import instantgamepic3 from "../Assests/instantgamepic3.webp";
   import instantgamepic4 from "../Assests/instantgamepic4.webp";
   import instantgamepic5 from "../Assests/instantgamepic5.webp";
    import sec2 from "../Assests/sec2.webp";

const Download = () => {
  return (
   <section className="download main-padding ">
    <div className="container">
        <div className="row">
        <div className="col-lg-6">
            <div className="downloadleft">
                <h2 className="downloadhead">Download Games</h2>
                
                <p className="downloadpara  main-paragraph">Lorem ipsum dolor sit amet consectetur. Quis maecenas scelerisque ullamcorper nunc sit blandit tincidunt velit. Vestibulum ipsum velit eget pellentesque consequat sed lorem. Dui bibendum id diam elementum enim mauris. Neque nibh quam sed diam quam suspendisse at enim. Id diam scelerisque.</p>
            
            <div className="buttonindownload">
                <button  className="round-button  linearcolor">Load More</button>

            </div>
            </div>

        </div>

        {/* swiper col */}

<div className="col-lg-6">
            <Swiper
            
            
            
              // navigation={true}
                   modules={[Navigation]}

                    
                  //
               spaceBetween={10}
              slidesPerView={2}
              centeredSlides={true}
              
              //   pagination={{ clickable: true }}
              //   autoplay={{ delay: 5000 }}
              loop={true}
              // coverfloweffgect
        //    coverflowEffect={
        //     {
        //       rotate:0,
        //       stretch:0,
        //       depth:100,
        //       modifier:2.5,

        //     }
        //    }
          


              // coverfloweffect
               navigation={{
    nextEl: '.custom-next',
    prevEl: '.custom-prev ',
    
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
                {/* 1st slide */}
            
           <SwiperSlide>

<div className="backgroundgrey">
    <div className="imagecontainer">
        <img src={instantgamepic1} />

    </div>
    <div className="spacesupermacy">
        <h2 className="spacehead">Space Supremacy</h2>
        <div className="actiongames">
        <img src={sec2}   width={40}/>
        <p className="spacepara">Action games</p>
        </div>

    </div>


</div>


</SwiperSlide>
{/* 1st slide end */}

            {/* 2nd slide start */}
                   
                <SwiperSlide>

<div className="backgroundgrey">
    <div className="imagecontainer">
        <img src={instantgamepic2} />

    </div>
    <div className="spacesupermacy">
        <h2 className="spacehead">Space Supremacy</h2>
        <div className="actiongames">
        <img src={sec2}   width={40}/>
        <p className="spacepara">Action games</p>
        </div>

    </div>


</div>


</SwiperSlide>
            
{/* 2nd swiper end */}

{/* 3rd slide */}
 
                   <SwiperSlide>

<div className="backgroundgrey">
    <div className="imagecontainer">
        <img src={instantgamepic3} />

    </div>
    <div className="spacesupermacy">
        <h2 className="spacehead">Space Supremacy</h2>
        <div className="actiongames">
        <img src={sec2}   width={40}/>
        <p className="spacepara">Action games</p>
        </div>

    </div>


</div>


</SwiperSlide>

{/* 3rd slide */}
{/* 4th slide */}

                <SwiperSlide>

<div className="backgroundgrey">
    <div className="imagecontainer">
        <img src={instantgamepic4} />

    </div>
    <div className="spacesupermacy">
        <h2 className="spacehead">Space Supremacy</h2>
        <div className="actiongames">
        <img src={sec2}   width={40}/>
        <p className="spacepara">Action games</p>
        </div>

    </div>


</div>


</SwiperSlide>

{/* 4thslide */}


{/* 5thslide */}

                <SwiperSlide>

<div className="backgroundgrey">
    <div className="imagecontainer">
        <img src={instantgamepic5} />

    </div>
    <div className="spacesupermacy">
        <h2 className="spacehead">Space Supremacy</h2>
        <div className="actiongames">
        <img src={sec2}   width={40}/>
        <p className="spacepara">Action games</p>
        </div>

    </div>


</div>


</SwiperSlide>

{/* 5thslide */}
   

            

                  
             
             
            </Swiper>

</div>



        {/* swipercol */}
</div>
    </div>

   </section>
  )
}

export default Download