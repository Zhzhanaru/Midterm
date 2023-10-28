import React from 'react'
import './Profile.styles.css'
import Navbar from '../../Tools/Navbar/Navbar'
import Footer from '../../Tools/Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate();

    const redirectTo = ()=>{
        navigate('/post')
    }
  return (
    <div>
        <Navbar/>
        <div className='first'>
            <h1>Profile</h1>
            <label className='label'>Name: Zhanaru</label><br/>
            <label className='label'>Surname: Manap</label><br/>
            <label className='label'>BirthDay: 05.12.2002</label><br/><br/>
            <label className='label'>email: zh_manap@kbtu.kz</label><br/><br/>
            <button className='profile-button' onClick={redirectTo}>See My Posts</button><br/><br/>
            
        </div>
        <Footer/>
        </div>
  )
}

export default Profile