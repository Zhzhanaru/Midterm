import React from 'react';
import Navbar from '../../Tools/Navbar/Navbar'
import Footer from '../../Tools/Footer/Footer'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate=useNavigate();

    const HandletoCreate=()=>{
        navigate('/post');
    }
  return (
    <div className='main'>
        <Navbar/>
        HomePage
        <div className='creation'>
            <h2>Do you want to post something?Just write it!</h2>
            <input text="Write your post" className='create-input'></input>
            <button className='creation' onClick={HandletoCreate}>Create</button>
        </div>
        
        <Footer/>
    </div>
  )
}
