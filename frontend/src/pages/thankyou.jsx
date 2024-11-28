
import { useNavigate } from 'react-router-dom';
import '../styles/thankyou.css';

function Thankyou(){
    const navigate = useNavigate();
    return(
        <div className="thankyou-container">
            <h1>Thank you for your Upload</h1>
            <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
        </div>
    );
}

export default Thankyou;