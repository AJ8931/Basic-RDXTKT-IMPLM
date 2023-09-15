import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import './App.css';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
