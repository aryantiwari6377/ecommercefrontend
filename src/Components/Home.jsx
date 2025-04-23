import React from 'react'
import Homeproducts from './Homeproducts';
import BanerSlider from './BanerSlider';
import rakhi from '../images/bhaislider1.gif';
import combo from '../images/combo-section-desktop.jpg'
import Footer from './Footer';
import Discountzone from '../Pages/Discountzone';

import Gendercat from '../Pages/Gendercat';
import Shoplook from '../Pages/Shoplook';
import shoesbanner from '../images/Comfy-Footwear.jpg'
import Slickslide from '../Pages/Sliderslick';
import EmblaCarouselComponent from '../Pages/Emblaslider';
import Navnew from './Navnew';
import Slidertest from './Slidertest';
import { useNavigate } from 'react-router-dom';

function Home() {
const navigate = useNavigate();

  return (
    <div className='mt-32 w-full'>
       <Homeproducts/>
      
        <BanerSlider/>
        <div className='mt-10 w-full'>
          <img src={rakhi}/>
        </div>
        
        <div className='mt-4 w-full'>
        <img src={combo} />
        </div>
        <Discountzone/>
    
        <div className='mt-16 w-full ' onClick={()=>navigate("/shoes")}>
        <img src={shoesbanner} />
        </div>
      
        {/* <Shoplook/>*/}
        <Slickslide/> 
        {/*  <EmblaCarouselComponent/>
       <Slidertest/>*/}
        <Footer/> 
      
    </div>
  )
}

export default Home