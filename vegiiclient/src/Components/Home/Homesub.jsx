import React from 'react'
import Btn from '../Common/Btn'
import './Home.css'
const Homesub = () => {
  return (
    <div className='subscribe'
     data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false">
        <div className='sub-left'>
           <h2> Subcribe to our Newsletter</h2>
            <p>Get e-mail updates about our latest shops and special offers</p>
        </div>
        <div className='sub-right'>
            <input type="text" name="" id="" />
            <Btn btn="Subscribe"/>
        </div>
        </div>
  )
}

export default Homesub