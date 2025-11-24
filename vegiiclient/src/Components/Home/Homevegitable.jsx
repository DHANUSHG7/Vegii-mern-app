import React from 'react'
import './Home.css'
import img1 from '../../Assets/category-1.jpg'
import img2 from '../../Assets/category-2.jpg'
import img3 from '../../Assets/category.jpg'
import img4 from '../../Assets/category-3.jpg'
import img5 from '../../Assets/category-4.jpg'
import Btn from '../Common/Btn'
const Homevegitable = () => {
  return (
    <div className='homevegii' 
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false">
        <div className='vegi-left'>
          <div className='vegi-contant'>
             <img src={img1} alt="" />
             <p>Friuts</p>
          </div>
          <div className='vegi-left'>
          <div className='vegi-contant'>
             <img src={img2} alt="" />
             <p>Vegitables</p>
          </div>
        </div>
    </div>
     <div className='vegi-center'>
          <div className='vegi-contant'>
           <div className='vegi-txt'> <h3>Vegitables</h3>
            <h6>Protect the health of every home</h6>
            <Btn btn={"shop now"}/></div>
             <img src={img3} alt="" />
          </div>
        </div>

        <div className='vegi-right'>
          <div className='vegi-contant'>
             <img src={img4} alt="" />
             <p>Juices</p>
          </div>
          <div className='vegi-left'>
          <div className='vegi-contant'>
             <img src={img5} alt="" />
             <p>Dried</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Homevegitable