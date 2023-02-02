import React from 'react';
import './Banner.css';
import banner from '../../assets/images/banner/banner.jpg'

const Banner = () => {
   return (
      <div class="banner">
         <img src={banner} alt="" className='img-overlay img-fluid' />
         <h4 class="first-text text-white">
            Computer Engineering
         </h4>

         <h6 class="second-text text-white">
            142,765 Computer Engineers follow this
         </h6>
      </div>
   );
};

export default Banner;