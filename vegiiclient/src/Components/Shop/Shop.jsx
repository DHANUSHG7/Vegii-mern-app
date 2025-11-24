import React from 'react'
import Header from '../Navbar/Navbar'
import Breadcome from '../Common/Breadcome'
import Footer from '../Footer/Footer'
import './Shop.css'
import Friutcard from '../Common/Friutcard'
import img1 from '../../Assets/product-1.jpg'
import img2 from '../../Assets/product-2.jpg'
import img3 from '../../Assets/product-3.jpg'
import img4 from '../../Assets/product-4.jpg'
import img5 from '../../Assets/product-5.jpg'
import img6 from '../../Assets/product-6.jpg'
import img7 from '../../Assets/product-7.jpg'
import img8 from '../../Assets/product-8.jpg' 
import Homesub from '../Home/Homesub'
const Shop = () => {
  return (
    <div>
      <Header/>
      <Breadcome breadpage={"Shop"} breadtitle={"Shop"}/>
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
          <Homesub/>
      <Footer/>
    </div>
  )
}

export default Shop