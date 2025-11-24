import React from 'react'
import './Common.css'
const Breadcome = ({breadpage,breadtitle}) => {
  return (
    <div className='breadcome'
     data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="flase">
        <div className='bread-txt'>
            <div className='bread-p'><p><a href="#">Home</a></p>/
            <p><a href="#">{breadpage}</a></p></div>
            <h1>{breadtitle}</h1>
        </div>

    </div>
  )
}

export default Breadcome