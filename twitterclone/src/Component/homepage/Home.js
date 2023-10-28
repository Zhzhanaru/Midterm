import React,{ useState }from 'react';
import Navbar from '../../Tools/Navbar/Navbar'
import Footer from '../../Tools/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import './Home.styles.css'

export const Home = () => {
    const navigate=useNavigate();
    const [searchField, setSearchField] = useState('');

    const HandletoCreate=()=>{
        navigate('/post');
    }
    const handleChange = (e) =>{
        setSearchField(e.target.value);
    }
  return (
    <div className='container'>
        <Navbar/>
        <div className='creation'>
            <h2>Do you want to post something? Just write it!</h2>
            <input text="Write your post" className='create-input' value={searchField} onChange={handleChange}></input>
            <button className='btn' onClick={HandletoCreate}>Create</button>
        </div>
        
        <Footer/>
    </div>
  )
}
