import React from 'react'
import './Home.css'
import Btn from '../Common/Btn'
import Heroicons from './Heroicons'
const Hero = () => {
  return (
   <div>
     <div className='hero-section'  data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="flase">
    <div className='hero-contant' data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-delay='90'
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
             data-aos-mirror="true"
            data-aos-once="flase"
  
    >
        <h1>WE SERVER FRESH FRIUTS AND VEGTABLE</h1>
        <p>we delevar 100% organic friuts and vegitable</p>
        <Btn btn="Veiw Detail"/>
    </div>

    </div>
   <Heroicons/>
   </div>
  )
}

export default Hero