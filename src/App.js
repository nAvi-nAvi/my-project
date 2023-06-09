import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home.js';
import Welcome from './pages/Welcome/welcome.js';

function App() {
  return (
    <BrowserRouter>
        <ToastContainer position='top-center' />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
