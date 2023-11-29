import React from 'react'; 
import "../styles/PopularCategories.scss"; 
import Summer from "../images/Summer.png"

function PopularCategories() {
  return (
    <div className='popular' >
      
    <div className='popular__image'>
        <img src={Summer}/>
    </div>
    <div className='popular__content'>
     <h2>Popular Categories</h2>
     <div className='popular__content__border'></div>
     <table>
        <tbody>
            <tr>
            <td>Flight</td>
            <td>Bus</td>
            <td>Entertainment</td>
            <td>Jewellery</td>

            </tr>
            <tr>
            <td>Medicines</td>
            <td>Hosting</td>
            <td>Flowers</td>
            <td>Beauty</td>

            </tr>
            <tr>
            <td>Flight</td>
            <td>Bus</td>
            <td>Entertainment</td>
            <td>Jewellery</td>

            </tr>
            <tr>
            <td>Medicines</td>
            <td>Hosting</td>
            <td>Flowers</td>
            <td>Beauty</td>

            </tr>
            
        </tbody>
      </table><table>
        <tbody>
            <tr>
            <td>Flight</td>
            <td>Bus</td>
            <td>Entertainment</td>
            <td>Jewellery</td>

            </tr>
            <tr>
            <td>Medicines</td>
            <td>Hosting</td>
            <td>Flowers</td>
            <td>Beauty</td>

            </tr>
            <tr>
            <td>Flight</td>
            <td>Bus</td>
            <td>Entertainment</td>
            <td>Jewellery</td>

            </tr>
            
            
        </tbody>
      </table>
    </div>
      
    </div>
  )
}

export default PopularCategories