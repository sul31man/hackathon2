import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom';
function AuthNavbar({setIsAuth}) {
    const location = useLocation(); // Helps track current route
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
        setIsAuth(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
            </div>
            <Link to="/User">User Profile</Link>
            <div className="navbar-links">
                <Link 
                    to="/" 
                    className={location.pathname === '/' ? 'active' : ''}
                >
                    Home
                </Link>

                <Link 
                    to="/dashboard"
                    className={location.pathname === '/dashboard' ? 'active' : ''}
                >
                    Dashboard
                </Link>
                <button onClick={handleLogout} className="logout-button">Logout</button>
                
                {/* Add more navigation links as needed */}
            </div>
        </nav>
    );
}

export default AuthNavbar;