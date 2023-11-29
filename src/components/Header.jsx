import  { useState } from 'react'
import "../styles/header.scss"; 
import logo from "../images/logo.png"; 
import search from "../images/searchIcon.png"
function Header() {
    const [searchText, setSearchText] = useState(); 
     
  return (
    <div className='header'>
       <div className='header__logoContainer'>
        <img src={logo}/>

       </div>
        <div className='header__inputContainer'>
            <input type='text' name='search' 
            value={searchText} 
            placeholder='Search For brand, category, coupon ' 
            onChange={(event)=> setSearchText(event.target.value)}
            style={{
                backgroundImage: `url(${search})`,
                backgroundSize:"20px 20px", 
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '10px 50%',
                paddingLeft: '30px',
              }}/> 
        </div>
        <div className='header__buttonContainer'>
            <button>LOGIN/REGISTER</button>
        </div>

    </div>
  )
}

export default Header