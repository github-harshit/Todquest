 
import "../styles/footer.scss"; 
import logo from "../images/logo.png"

function Footer() {
  return (
    <div className="footer">
        <div className= "footer__logo">
            <img src={logo}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, minima.</p>
             <button className="footer__btn  footer__btn--app">  Download From APP STORE </button>
             <button className="footer__btn  footer__btn--play"> Download From  PLAY STORE </button>
         </div>
        <div>
           <p>COMPANY</p>
           <ul>
           
            <li> <a> Privacy Policy</a></li>
            <li> <a> Terms</a></li>
            <li> <a> Blogs</a></li>
            <li> <a> Branding</a></li>
            <li> <a> Career</a></li>
           </ul>
        </div>
        <div>
            <p>GENERAL</p>
            <ul>
           
           <li> <a> Partner with us</a></li>
           <li> <a> Write to us </a></li>
           <li> <a> Mobile App</a></li>
           <li> <a> Site map</a></li>
          
          </ul>
        </div>
        <div>
        <p>PAGES</p>
            <ul>
           <li> <a> Amazon Offer</a></li>
           <li> <a> Google Pay Offers </a></li>
           <li> <a> Paypal Offers</a></li>
           <li> <a> PhonePe Offers</a></li>
           <li> <a> Festival  Offers</a></li>
           <li> <a> Bank Offers</a></li>
          
          </ul>

        </div>
        <div>
          <p>MORE</p>
        <ul>
           
           <li> <a> City Offers</a></li>
           <li> <a> Brand Offers </a></li>
           <li> <a> Product Deals </a></li>
           <li> <a> Gift Cards</a></li>
          
          
          </ul>
        </div>
     
    </div>
  )
}

export default Footer