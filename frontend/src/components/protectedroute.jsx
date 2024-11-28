import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProtectedRoute({ children }) {
    const [isValid, setIsValid] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const verifyToken = async () => {
            if (!token) {
                setIsValid(false);
                return;
            }

            try {
                // Verify token with backend
                const response = await axios.get('http://localhost:8000/backend1/verify-token/', {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                });
                setIsValid(true);
            } catch (error) {
                console.error('Token verification failed:', error);
                setIsValid(false);
                localStorage.removeItem('token'); // Clear invalid token
            }
        };

        verifyToken();
    }, [token]);

    if (isValid === null) {
        // Show loading state while checking
        return <div>Loading...</div>;
    }

    if (!isValid) {
        // Redirect to login if token is invalid
        return <Navigate to="/login" />;
    }

    // Render protected content if token is valid
    return children;
}

export default ProtectedRoute;