import React from 'react'
import './Home.css'
import Homeicons from '../Common/Homeicons'
const Heroicons = () => {
  return (
    <div>
        <div className='homeicons'>
     <Homeicons  icons={<i class="bi bi-truck"></i>} discription={"Free Shipping"} offer={'On order over $100'}/>
    <Homeicons  icons={<ion-icon name="egg-outline"></ion-icon>} discription={"Always Fresh"} offer={'Product well package'}/>
    <Homeicons  icons={<i class="bi bi-patch-check-fill"></i>} discription={"Superior Quality"} offer={' Superior Quality '}/>
    <Homeicons  icons={<i class="bi bi-globe-central-south-asia"></i>} discription={"Support"} offer={'24/7 Support'}/>
   </div>
    </div>
  )
}

export default Heroicons