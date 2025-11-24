import React from 'react'
import './Common.css'
// import img1 from '../../Assets/product-1.jpg'

const Friutcard = ({image,rate,list}) => {
  return (
    <div>
        <div  data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false">
            <div className='fruit-contant'>
               <div className='fruit-img'> {image} </div>
               <h5>{list}</h5>
               <p className='f-rate'> {rate}</p>
               <p className='f-icon'><i class="bi bi-list"></i><i class="bi bi-chat-heart-fill"></i><i class="bi bi-cart-check-fill"></i></p>
            </div>
        </div>
    </div>
  )
}

export default Friutcard