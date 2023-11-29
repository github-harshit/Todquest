import React from 'react'; 
import "../styles/button.scss"
function Button({children, className, onClick}) {
  return (
    <div>
       <button className={ `button ${className}`}  onClick= {onClick}>
          {children}
       </button>
    </div>
  )
}

export default Button