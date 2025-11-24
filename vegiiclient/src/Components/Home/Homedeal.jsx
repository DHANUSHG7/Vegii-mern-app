import React from 'react'
import './Home.css'
const Homedeal = () => {
  return (
    <div className='home-deal' >
        <div className='deal-summa'></div>
        <div className='deal-txt'
         data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false">
        <h3>Best Price For You</h3>
        <h1>Deal of the day</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        <h2>Spinach</h2>
        <h4>$10 now $5 only</h4>
        </div>
    </div>
  )
}

export default Homedeal