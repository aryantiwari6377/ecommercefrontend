import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import s1 from '../images/shopping1.jpg';
import s2 from '../images/shopping2.jpg';
import s3 from '../images/shopping3.jpg';
import s4 from '../images/shopping4.jpg';
import s5 from '../images/shopping5.jpg';

function Slidertest() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    //     autoplay: true,            // Enables auto sliding
    // autoplaySpeed: 2000,     
    arrows: true,  
      };
      
      return (
        <div>
          <h2> React Slider </h2>
          <Slider {...settings}>
            <div >
          <img src={s1} className='w-[180px] h-[200px] ml-[40%]'/>
            </div>
            <div>
            <img src={s1} className='w-[180px] h-[200px] ml-[40%]'/>
            </div>
            <div>
            <img src={s1} className='w-[180px] h-[200px] ml-[40%]'/>
            </div>
            <div>
            <img src={s1} className='w-[180px] h-[200px] ml-[40%]'/>
            </div>
            <div>
            <img src={s1} className='w-[180px] h-[200px] ml-[40%]'/>
            </div>
          </Slider>
        </div>
      );
    };
export default Slidertest