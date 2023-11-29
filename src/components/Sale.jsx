import "../styles/Sale.scss"; 
import sunglasess from "../images/sunglasses.png"
import sale1 from "../images/sale1.png"
import sale3 from "../images/sale3.png"
import sale4 from "../images/sale4.png"
function Sale() {
  return (
    <div className='sale'>
       <div className='sale__image'>
         <img src={sunglasess}/>
       </div>
       <h2> Popular Mechanism </h2>
       <div className="sale__border"></div>
       <div className="sale__container">
         <div className="sale__container__box">
           <img src={sale1}/>
         </div>
         <div className="sale__container__box">
           <img src={sale4}/>
         </div>
         <div className="sale__container__box">
             <img src={sale3}/>
         </div>
         <div className="sale__container__box">
           <img src={sale1}/>
         </div>
        
        
      
        
       </div>

    </div>
  )
}

export default Sale