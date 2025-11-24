import React from 'react'
import './Home.css'
import img1 from '../../Assets/partner-1.png'
import img2 from '../../Assets/partner-2.png'
import img3 from '../../Assets/partner-3.png'
import img4 from '../../Assets/partner-4.png'
import img5 from '../../Assets/partner-5.png'
const Homepartner = () => {
  return (
    <div>
        <div className='partner'
        data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true">
            <img src={img1} alt="Not found" />
            <img src={img2} alt="Not found" />
            <img src={img3} alt="Not found" />
            <img src={img4} alt="Not found" />
            <img src={img5} alt="Not found" />
        </div>

    </div>
  )
}

export default Homepartner