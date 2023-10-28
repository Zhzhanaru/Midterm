import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { Home } from './Component/homepage/Home';
import Profile from './Component/profilepage/Profile';
import Post from './Component/postpage/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/post' element={<Post/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
