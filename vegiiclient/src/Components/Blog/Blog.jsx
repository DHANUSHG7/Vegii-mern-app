import React from 'react'
import Header from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Blog.css'
import Breadcome from '../Common/Breadcome'
import Blogcommon from './Blogcommon'
import img1 from '../../Assets/image_1.jpg'
import img2 from '../../Assets/image_2.jpg'
import img3 from '../../Assets/image_3.jpg'
import img4 from '../../Assets/image_4.jpg'
import img5 from '../../Assets/image_5.jpg'
import img6 from '../../Assets/image_6.jpg'
const Blog = () => {
  return (
    <div>
      <Header/>
      <Breadcome breadpage={"Blog"} breadtitle={"blog"}/>
      <div className='blog'>
        <div className='blog-left' >
          <Blogcommon image={<img src={img1} alt='not Found' />} small={"July 20, 2019 Admin  3"} h2={"Even the all-powerful Pointing has no control about the blind texts"} p={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."} />

          <Blogcommon image={<img src={img2} alt='not Found' />} small={"July 20, 2019 Admin  3"} h2={"Even the all-powerful Pointing has no control about the blind texts"} p={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."} />

          <Blogcommon image={<img src={img3} alt='not Found' />} small={"July 20, 2019 Admin  3"} h2={"Even the all-powerful Pointing has no control about the blind texts"} p={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."} />

          <Blogcommon image={<img src={img4} alt='not Found' />} small={"July 20, 2019 Admin  3"} h2={"Even the all-powerful Pointing has no control about the blind texts"} p={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."} />

          <Blogcommon image={<img src={img5} alt='not Found' />} small={"July 20, 2019 Admin  3"} h2={"Even the all-powerful Pointing has no control about the blind texts"} p={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."} />

          <Blogcommon image={<img src={img6} alt='not Found' />} small={"July 20, 2019 Admin  3"} h2={"Even the all-powerful Pointing has no control about the blind texts"} p={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."} />

        </div>
        <div className='blog-right'  data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="flase">
          <div className='blog-input'>
            <input type="text" placeholder='Search...' />
          </div>
          <br /><br /><br />

            <div className='catagery'>
              <h2> Categories </h2>
              <div className='blog-catagery'>
                <p>Vegetables</p>
                <p>(12)</p>
                
              </div>
              <hr />
              <div className='blog-catagery'>
                <p>Friuts</p>
                <p>(22)</p>
              </div>
              <hr />
              <div className='blog-catagery'>
                <p>Juices</p>
                <p>(18)</p>
              </div>
              <hr />
              <div className='blog-catagery'>
                <p>Dries</p>
                <p>(23)</p>
              </div>
              <hr />
            </div>
            <br /><br /><br />
            <div className='recent-blog'>
              <h2>Recent Blog</h2>
              <div className='recent-blog1'>
                <div className='recent-blog-img'><img src={img1} alt="" /></div>
                <div className='blog-contant'>
                  <h4>Even the all-powerful Pointing has no control about the blind texts</h4>
                <p> April 09, 2019  Admin  19</p>
                </div>
              </div>
              <div className='recent-blog1'>
                <div className='recent-blog-img'><img src={img2} alt="" /></div>
                <div className='blog-contant'>
                  <h4>Even the all-powerful Pointing has no control about the blind texts</h4>
                <p> April 09, 2019  Admin  19</p>
                </div>
              </div>
              <div className='recent-blog1'>
                <div className='recent-blog-img'><img src={img3} alt="" /></div>
                <div className='blog-contant'>
                  <h4>Even the all-powerful Pointing has no control about the blind texts</h4>
                <p> April 09, 2019  Admin  19</p>
                </div>
              </div>
            </div>
            <br /><br /><br /><br />
            <div className='paragraph'>
              <h2>Paragraph</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis neque quam quidem architecto, quasi aliquid natus aspernatur corrupti? Sequi quaerat dolor aut mollitia necessitatibus quibusdam in iure, hic non reprehenderit!</p>
            </div>
        </div>
      </div>
      <Footer/>
      </div>
  )
}

export default Blog