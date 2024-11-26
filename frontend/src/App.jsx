import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import User from './pages/user';
import About from './pages/about';
import Register from './pages/register';
import AuthNavbar from './components/authnavbar';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import { useState } from 'react';
import {useEffect} from 'react';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if(token){
      setIsAuth(true);
    }
  }, [token]);

  return (
    <BrowserRouter>
      {isAuth ? <AuthNavbar setAuth={setIsAuth} /> : <Navbar />}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User" element={<User />} />
          <Route path="/About" element={<About />} />
          <Route path="/register" element={<Register setIsAuth={setIsAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

          {/* Auth Routes */}
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
