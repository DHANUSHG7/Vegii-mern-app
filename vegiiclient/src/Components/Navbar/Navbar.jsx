import React from 'react'
import './Navbar.css'
import { Link, Links } from 'react-router-dom'
const Header = () => {
  return ( 
    <div>
     <div className='navhead'>
        <p><ion-icon name="call-outline"></ion-icon>+ 1235 2355 98</p>
        <p><ion-icon name="mail-open-outline"></ion-icon>youremail@email.com</p>
        <p><ion-icon name="location-outline"></ion-icon>Chennai</p>
     </div>
        <div className='navbar'>
            <h1 className='nav-logo'>Vegefoods</h1>
            <ul className='nav-ui'>
              <li><Link to={'/'}>HOME</Link></li>
              <li className='parent'> <Link to={'/shop'}>SHOP</Link>
                <ul className='child'>
                  <li>Shop</li>
                  <li>Wistle</li>
                  <li>Single Produt</li>
                  <li>Cart</li>
                  <li>Checkout</li>
                </ul>
              </li>
              <li><Link to={'/about'}>ABOUT</Link></li>
              <li><Link to={'/blog'}>BLOG</Link></li>
              <li><Link to={'/contact'}>CONTACT</Link></li>
            
              <li><ion-icon name="cart-outline"></ion-icon></li>
            </ul>
           <div className='menu-icon'> <ion-icon name="menu-outline"></ion-icon></div>
        </div>
    </div>
  )
}

export default Header;