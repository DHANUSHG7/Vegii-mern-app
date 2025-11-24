import React from 'react'
import Header from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Breadcome from '../Common/Breadcome'
import axios from 'axios'
import './Contact.css'
import { useState } from 'react'
import Btn from '../Common/Btn'
import Userinfo from './Userinfo'
// import dotenv from 'dotenv'

const Contact = () => {
  const [info,setIfo]=useState({Uname:"",Uemail:"",Usubject:"",Umessage:""});
  const [err,setErr]=useState({})
  const handlechange=(e)=>{
    setIfo({...info,[e.target.name]:e.target.value})
  }
  const validation=()=>{
   let isfilled = {};
if (!info.Uname.trim()) {
  isfilled.Uname =  "Please fill this name feild";
}
if (!info.Usubject.trim()) {
  isfilled.Usubject = "Please fill the subject field";
}
if (!info.Umessage.trim()) {
  isfilled.Umessage = "Please fill the message field";
}
if (!info.Uemail.includes('@')) {
  isfilled.Uemail = "Please enter a valid email";
}
    setErr(isfilled);
    return Object.keys(isfilled).length===0;
  }
  const handlesubmit = async(e)=>{
    e.preventDefault();
    if(validation()){    
        alert("message was sent sucessfully");
        console.log(info)
        setIfo({Uname:"",Uemail:"",Usubject:"",Umessage:""})
        setErr({})}
    try{
      // await axios.post(process.env.backendurl,info);
      // await axios.post("http://localhost:7070/query",info);
      await axios.post("https://vegii-mern-app-server-cgylevcqy-dhanushs-projects-9cb2b9f9.vercel.app//query",info);

      
    }
    catch(err){
      if(err){
        alert(err);
      }
    }
      }
  return (
    <div>
      <Header/>
      <Breadcome breadpage={"Contact"} breadtitle={"Contact Us"}/>
      <div className='contact'>
        <div className='contact-top'>
          <div className='contact-txt'>
            <p>Address: 198 West 21th Street,<br /> Suite 721 New York NY <br /> 10016</p>
          </div>
          <div className='contact-txt'>
            <p>Phone: + 1235 2355 98</p>
          </div>
          <div className='contact-txt'>
            <p>Email: info@yoursite.com</p>
          </div>
          <div className='contact-txt'>
            <p>Website yoursite.com</p>
          </div>
        </div>
        <div className='contact-down'>
          <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1548.2509268025829!2d80.22541983384595!3d12.849818890754866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1762838513119!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='Contact-form'>
            <form className='inputs'  onSubmit={handlesubmit} >
            <div className='input'>
               <input type="text" 
              name="Uname"
              onChange={handlechange}
              value={info.Uname} 
              placeholder='User Name'
                />
           {err.Uname && <p style={{color:"red"}}>{err.Uname}</p>}
           </div>
            <div className='input'>
              <input type="email"
               name="Uemail" 
               onChange={handlechange} 
               value={info.Uemail} 
               placeholder='User email'
               />
            {err.Uemail && <p style={{color:"red"}}>{err.Uemail}</p>}</div>
            <div className='input'>
               <input type="text" 
               name="Usubject" 
               onChange={handlechange} 
               value={info.Usubject} 
               placeholder='User subject'
                />
            {err.Usubject && <p style={{color:"red"}}>{err.Usubject}</p>}</div>
            <div className='input'>
               <textarea type="text" 
               name="Umessage" 
               onChange={handlechange} 
               value={info.Umessage} 
               placeholder='User Message' />
            {err.Umessage && <p style={{color:"red"}}>{err.Umessage}</p>}</div>
            <Btn btn={"submit"}/>
            </form>
          </div>

        </div>
      </div>
      <Userinfo/>
      <Footer/>
      </div>
  )
}

export default Contact