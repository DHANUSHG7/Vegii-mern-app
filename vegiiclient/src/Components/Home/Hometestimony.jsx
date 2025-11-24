import React from 'react'
import './Home.css'
import img1 from '../../Assets/person_1.jpg'
import img2 from '../../Assets/person_2.jpg'
// import img3 from '../../Assets/person_3.jpg'
const Hometestimony = () => {
  return (
    <div className='testi'>
       <div className='testi-txt' data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false">
         <h3>Testimony</h3>
        <h1>Our satisfied customer says</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
        </p>
       </div>
       <div className='testi-slide' data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true">
        <div className='testi-contant'>
            <img src={img1} alt="" />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            <h4>Garrenth Smith</h4>
            <h6>MARKETING MANAGER</h6>
        </div>
        <div className='testi-contant'>
            <img src={img2} alt="" />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            <h4>Garrenth Smith</h4>
            <h6>WEB DEVELOPER</h6>
        </div>
        <div className='testi-contant'>
            <img src={img1} alt="" />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            <h4>Garrenth Smith</h4>
            <h6>UIUX</h6>
        </div>
       </div>
        </div>

  )
}

export default Hometestimony