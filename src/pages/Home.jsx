import React from 'react'; 
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MainContainer from "../components/MainContainer.jsx";
import Footer from "../components/Footer.jsx"; 
import Deals from "../components/Deals.jsx";
import CouponCategory from "../components/CouponCategory.jsx";
import Newsletter from "../components/Newsletter.jsx";
 import Sale from "../components/Sale.jsx";
 import HowItWorks from "../components/HowItWorks.jsx";
 import PopularCategories from "../components/PopularCategories.jsx";
 import Slider from "../components/Slider.jsx";

function Home() {
  return (
    <div>

      <Header/>
      <Navbar/>
      <Slider/>
      <MainContainer/>
       <Deals/>
       <CouponCategory/>
       <Sale/>
        <Newsletter/>
        <HowItWorks/>
       <PopularCategories/> 
       <Footer/>
    </div>
  )
}

export default Home