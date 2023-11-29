
 import "../styles/deals.scss"; 
 import AmazonCard from "./AmazonCard"

function Deals() {
  return (
    <div className='deals'>
        <h2> Deals Of The Day </h2>
        <div className="deals__border"></div>
         <div className="deals__box">
         <AmazonCard/>
         <AmazonCard/>
         <AmazonCard/>
         <AmazonCard/>


         </div>
        
    </div>
  )
}

export default Deals