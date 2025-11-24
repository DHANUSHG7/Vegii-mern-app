import React from 'react'
import'./Common.css'
const Homeicons = ({icons,discription,offer}) => {
  return (
    <div className='repeat-icons' data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false">
        <div className='iconsection'>
            <div className='iconsection-h'>
            <div className="icon">{icons}</div>
            <h3>{discription}</h3>
            <p>{offer}</p></div>
        </div>


    </div>
  )
}

export default Homeicons