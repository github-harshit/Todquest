import "../styles/newsletter.scss"
import Button from "./Button"; 
import newsletter from "../images/newsletter.png"

function Newsletter() {
  return (
    <div className="newsletter">
        <div className="newsletter__box">
        <div className="newsletter__box__image">
             <img src={newsletter}/>
        </div>
        <div className="newsletter__box__content">
           <div className="newsletter__box__content__inside">
           <h1> Subscribe to our Newsletter!</h1>
             <p>Be the first to get exclusive offers and the latest news </p>
             
           </div>
            <input  type="text" placeholder="Enter your email address"></input>
              <Button>Subscribe </Button>
        </div>


        </div>
       

    </div>
  )
}

export default Newsletter