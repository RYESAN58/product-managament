import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:8000/api')
            .then((response) => {
                console.log(response)
                setProducts(response.data)
            })
            .catch((err) => console.log(err.response));
    }, []);

    return (
        <div>
            <h1>products</h1>
            {products.map((products, index) => {
                return(
                    <div key={products._id}>
                        <Link to = {`/product/${products._id}`}>{products.title}</Link>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}

export default AllProducts