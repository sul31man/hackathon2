import { useState } from 'react';
import axios from 'axios';
import '../styles/verify.css';
function Verify() {
    const email = localStorage.getItem('email');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/backend1/send-verification-email/', { email });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error sending verification email');
        }
    };
    

    return (
        <div className="page-background">
            <div className="verify-container">
                <h1>Request Email Verification</h1>
            <div className="verify-button">
                <button onClick={handleSubmit}>Send Verification Email</button>
            </div>
            {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export default Verify;