import React from 'react'
import { useState , useEffect } from 'react'
import { data } from 'react-router-dom';
const Userinfo = () => {
    const [info,setInfo]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:7070")
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data);
            setInfo(data)
        })
        .catch((err)=>{if(err) throw err})

    },[])
  return (
    <div>
       {
            info.map((u)=>
                <h1 key={u._id}>
                    {u.Uname}
                </h1>
            )
            }

    </div>
  )
}

export default Userinfo