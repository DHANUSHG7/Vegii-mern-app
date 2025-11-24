import React from 'react'
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Friutcard from '../Common/Friutcard'
import img1 from '../../Assets/product-1.jpg'
import img2 from '../../Assets/product-2.jpg'
import img3 from '../../Assets/product-3.jpg'
import img4 from '../../Assets/product-4.jpg'
import img5 from '../../Assets/product-5.jpg'
import img6 from '../../Assets/product-6.jpg'
import img7 from '../../Assets/product-7.jpg'
import img8 from '../../Assets/product-8.jpg'
const Homeproduct = () => {
  AOS.init();
  return (
    <div>
        <div className="product-txt" >
          <h3 style={{color:"#82ae46"}}>  Featured Products</h3>
          <h1>Our Products</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          <div className='friutcart' >
          <Friutcard image={<img src={img1} alt='Not fout'/>} list={"Bell Pepper"} rate={"$120"}/>
          <Friutcard image={<img src={img2} alt='Not fout'/>} list={"Strawberry"} rate={"$120"}/>
          <Friutcard image={<img src={img3} alt='Not fout'/>} list={"Green Beans"} rate={"$120"}/>
          <Friutcard image={<img src={img4} alt='Not fout'/>} list={"Purple Cabbage"} rate={"$120"}/>
          <Friutcard image={<img src={img5} alt='Not fout'/>} list={"Tomatoe"} rate={"$120"}/>
          <Friutcard image={<img src={img6} alt='Not fout'/>} list={"Brocolli"} rate={"$120"}/>
          <Friutcard image={<img src={img7} alt='Not fout'/>} list={"Carrots"} rate={"$120"}/>
          <Friutcard image={<img src={img8} alt='Not fout'/>} list={"Fruit Juice"} rate={"$120"}/>
          </div>
        </div>
        
    </div>
  )
}

export default Homeproduct