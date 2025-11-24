import React from 'react'
import Header from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Homesub from '../Home/Homesub'
import Homedeal from '../Home/Homedeal'
import Hometestimony from '../Home/Hometestimony'
import Homeicons from '../Common/Homeicons'
import Heroicons from '../Home/Heroicons';
import './About.css'
import Breadcome from '../Common/Breadcome'
import img from '../../Assets/about.jpg'
import Btn from '../Common/Btn'
const About = () => {
  return (
    <div>

      <Header/>
      <Breadcome breadpage={"About"} breadtitle={"About"}/>
      <div>
      <div className='about'>
        <div className="about-left">
          <img src={img} alt="" />
        </div>
        <div className="about-right">
          <h1>Welcome to Vegefoods an eCommerce website</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
          <Btn btn={"Shop now"}/>
        </div>
        
      </div>
     <Homesub/>
     <Homedeal/>
     <Hometestimony/>
     <Heroicons/>
      </div>
      <Footer/>
    </div>
  )
}

export default About