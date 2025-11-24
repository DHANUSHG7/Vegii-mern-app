import React from 'react'
import Hero from './Hero'
import Homevegitable from './Homevegitable'
import Homeproduct from './Homeproduct'
import Homedeal from './Homedeal'
import Hometestimony from './Hometestimony'
import Homepartner from './Homepartner'
import Homesub from './Homesub'
import Header from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
     <Header/>
      <Hero/>
      <Homevegitable/>
      <Homeproduct/>
      <Homedeal/>
      <Hometestimony/>
      <Homepartner/>
      <Homesub/>
      <Footer/>
      </div>
  )
}

export default Home