import "../styles/AmazonCard.scss"
import amazon from "../images/amazon.png"; 
import Button from "./Button";
function AmazonCard() {
  return (
    <div className='card'>
     <div className="card__box">
     <p className="card__box__green">Upto 60% off on Appliances </p>
     <img src={amazon} />
     <p className="card__box__grey">Upto 60% off on summer Appliances </p>
    <Button className= "grab"> Grab Now </Button>


     </div>
   

    </div>
  )
}

export default AmazonCard