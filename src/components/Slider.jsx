import React, {useState, useEffect} from 'react'; 
import slide1 from "../images/slide1.png"; 
import "../styles/Slider.scss"
const slides= [slide1, slide1, slide1]; 


function Slider() {
     const [index, setIndex]  = useState(0); 
     const increment  = ()=>{
         if(index===slides.length-1 ? setIndex(0): setIndex(index+1)); 
     }
      useEffect(()=>{
         const interval  = setInterval(()=>{
              increment(); 
         }, 2000); 

         return ()=>{
             clearInterval(interval); 
         }

      }, [])
  return (
    <div className='slider'>
        <div style={{backgroundImage: `url(${slide1})`, 
                     backgroundPosition: "center", 
                     backgroundSize: "cover",
                     width: "100%", 
                    height: "100%"}
                     }>

        </div>
        <div className='slider__buttons'>
             {slides.map((x, i)=> <button onClick={()=>setIndex(i)} key={i} className = {i===index? 'slider__buttons__btn slider__buttons__btn--active': 'slider__buttons__btn'}></button>)}
        </div>
    </div>
  )
}

export default Slider