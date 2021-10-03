import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import PrinterRegistration from './PrinterRegistration'
function Header() {

  
    return (
        <div className = "header">

          <div className = "header__style">
           <img className = "header__image" src = "https://pngimage.net/wp-content/uploads/2018/06/mushroom-logo-png-1.png" alt = " " />
           <form>
             <input className = "header__input" type = "text" placeholder = "Search printers" />
           </form>
          </div>
           <div class = "register__btn">
               <Link to ="/Register">
                 <button class = "btn" onClick ="" >Register Your Printer</button>
               </Link> 
           </div>
           

        </div>

        
    )
}

export default Header
