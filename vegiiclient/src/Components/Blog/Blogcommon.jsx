import React from 'react'
import './Blog.css'
import Btn from '../Common/Btn'
import img from '../../Assets/image_1.jpg'
const Blogcommon = ({image,small,h2,p}) => {
  return (
    <div className='bgcommon'  data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="flase">
        <div className='blog-img'>
            {image}
        </div>
        <div className='blgcmn-contant' >
            <small>{small}</small>
            <br /><br />
            <h2>{h2}</h2>
            <br /><br />
            <p>{p}</p>
            <Btn btn={"Shop Now"}/>
        </div>
    </div>
  )
}

export default Blogcommon