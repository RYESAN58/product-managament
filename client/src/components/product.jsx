import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const Product = (props) => {
    const [Product, setProduct] = useState({})
    const {id} = useParams();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err))
    }, []);

    return (
        <div>
            <h1>{Product.title}</h1>
            <p>price: ${Product.price}</p>
            <p>description: {Product.desciption}</p>
        </div>
    )
}
export default Product;