import React from 'react'
import "../styles/howItWorks.scss"; 
import phone1 from "../images/phone1.png"; 
import phone2 from "../images/phone2.png"; 
import login from "../images/Login.jpg"; 
import coupon from "../images/Coupon.jpg"; 
import grab from "../images/grab.jpg"
function HowItWorks() {
  return (
    <div className='works'>
         <h2> How it Works </h2>
          <div className='works__border'>  </div>

        
      <div className='works__cards'>

        <div className='works__cards__card'>

            <div className='works__cards__card__image'>
              <img src={login}></img>
            </div>
            
            <h4>Signup</h4>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>

        </div>
        <div className='works__cards__card'>
        <div className='works__cards__card__image'>
               <img src={coupon}></img>
            </div>
            <h4>Choose Coupon </h4>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>

        </div>
        <div className='works__cards__card'>
        <div className='works__cards__card__image'>
                <img src={grab}></img>
            </div>
          
            <h4>Grab Coupon </h4>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>

        </div>

      

      </div>

      <div className='works__mobiles'>
          <div className='works__mobiles__content'>
             <h1> Want to be a part of our team </h1>
             <p> Be a part of the best site of discount coupons </p>
             <div className='works__mobiles__content__buttons'>
             <button className=" works__mobiles__content__btn works__mobiles__content__btn--app">  APP STORE</button>
             <button className="works__mobiles__content__btn works__mobiles__content__btn--play"> PLAY STORE</button>

             </div>
             
          </div>
          <div className='works__mobiles__image'>
            <img src={phone1}/>
            <img src={phone2}/>
          </div>

      </div>

    </div>
  )
}

export default HowItWorks