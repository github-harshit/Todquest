import AmazonCard from "./AmazonCard"
import "../styles/MainContainer.scss"; 
function MainContainer() {
  return (
    <div className="mainContainer">
       <div className="mainContainer__box">
           <button>
             Popular Coupons
           </button>
           <button>
             Ending Soon
           </button>
           <button>
            Latest Coupons
           </button>

       </div>
       <div className="mainContainer__cards">
      <AmazonCard/>
      <AmazonCard/>
      <AmazonCard/>
      <AmazonCard/>
      <AmazonCard/>
      <AmazonCard/>
      <AmazonCard/>
      <AmazonCard/>

       </div>
      

    </div>
  )
}

export default MainContainer