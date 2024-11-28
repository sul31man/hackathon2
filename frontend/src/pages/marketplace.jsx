import axios from 'axios';
import { useState, useEffect } from 'react';

function Marketplace(){
    const [products, setProducts] = useState([]);
    const url = 'http://localhost:8000/backend1/get_products/';

    useEffect(() => {
        const basicGet = async () => {
            try {
                const response = await axios.get(url);
                setProducts(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        basicGet();
    }, []);

    return(
        <div>
            <h1>Marketplace</h1>
            <p>Site still in development</p>
            <div className = 'post1'>
                {products.map(product => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <img src={product.image} alt={product.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Marketplace;