
import Home from './pages/Home';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './pages/About';
import Settings from './pages/Settings';
import Shorts from './pages/Shorts';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
          <Route path='/shorts' element={<Shorts />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
