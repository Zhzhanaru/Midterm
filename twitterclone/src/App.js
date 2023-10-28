import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { Home } from './Component/homepage/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
