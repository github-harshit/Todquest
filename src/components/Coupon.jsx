import React from 'react';
import "../styles/Coupon.scss"


function Coupon({image, title}) {
  return (
    <div className='coupon'>
     <div className='coupon__image'>
       <img src={image}/>

     </div>
     
     
     <p>{title}</p>


    </div>
  )
}

export default Coupon