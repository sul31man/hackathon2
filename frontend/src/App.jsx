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
import Sell from './pages/Sell';
import Thankyou from './pages/thankyou';
import Verify from './pages/verify';
import ProtectedRoute from './components/protectedroute';
import { AuthProvider } from './context/authcontext';
import { useAuth } from './context/authcontext';
import { useEffect } from 'react';

function App(){
  return(
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

function AppContent() {
  const { setIsAuth } = useAuth();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if(token){
      setIsAuth(true);
    }
  }, [token]);
  return (

        <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<><Navbar /><Home /></>} />
            <Route path="/User" element={<ProtectedRoute><><AuthNavbar /><User /></></ProtectedRoute>} />
            <Route path="/About" element={<><Navbar /><About /></>} />
            <Route path="/register" element={<><Navbar /><Register /></>} />
            <Route path="/login" element={<><Navbar /><Login /></>} />

            {/* Auth Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><><AuthNavbar /><Dashboard /></></ProtectedRoute>} />
            <Route path="/sell" element={<ProtectedRoute><><AuthNavbar /><Sell /></></ProtectedRoute>} />
            <Route path="/thankyou" element={<Thankyou />} />
            <Route path="/verify" element={<Verify />} />
          </Routes>
        </div>
        </BrowserRouter>

  );
}

export default App;
