import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

function Login({setIsAuth}){
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    
    const navigate = useNavigate();
    const url = 'http://localhost:8000/backend1/login/';

    const { username, password } = formData;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url, formData);  // Send formData
            
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', response.data.user.username);
                localStorage.setItem('email', response.data.user.email);
                setIsAuth(true);
                navigate('/dashboard');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return(
        <>
        <div>
            <h1>Login</h1>
        </div>
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                /> 

                <label>Password</label>
                <input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
        </>
    )
}

export default Login;