
import Coupon from './Coupon'
import fashion from "../images/fashion.png"; 
import "../styles/CouponCategory.scss"
import AmazonCard from './AmazonCard';
 import beauty from "../images/beauty care.png"
 import food  from "../images/food.png"
 import toys from "../images/toys.png"
 import cloud from "../images/hosting.png"
 import gaming from "../images/gaming.png"
 import phones from "../images/mobile.png"
 import travel from "../images/travel.png"
 import movies from "../images/movies.png"
function CouponCategory() {
    const coupons  = [{image: fashion, title:"Fashion"},{image: food, title:"Food"},
                       {image: beauty, title: "Beauty"}, {image: toys, title:"Toys"}, 
                       {image: cloud, title:"Cloud"}, {image: gaming, title:"Gaming"}, 
                       {image: phones, title:"Phones"}, {image: travel, title:"Travel"}, 
                       {image: movies, title:"Movies"}
                    ]
  return (
    <div className='couponCategory'>
         <h2> Coupon By Categories </h2>
         <div className='couponCategory__border'> </div>

        
      <div className='couponCategory__box'>
        { coupons.map((c, index)=> <Coupon key={index} image={c.image} title={c.title}/>)}
      </div>
      <div className='couponCategory__amazon'>
        <AmazonCard/>
        <AmazonCard/>
        <AmazonCard/>
        <AmazonCard/>
      </div>

    </div>
  )
}

export default CouponCategory