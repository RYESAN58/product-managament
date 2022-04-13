import React, {useState} from "react";
import axios from "axios";

const Form = (props) => {
    const [title, setTitle] = useState('')
    const [price, setPRice] = useState(0)
    const [description, setDesciption] = useState('')

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleDescription = (e) => {
        setDesciption(e.target.value)
    }
    const handlePrice = (e) => {
        setPRice(e.target.value + price)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/', {
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res);
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Title</label>
                <input type='text' onChange={handleTitle}></input>

                <label>Description</label>
                <input type='text' onChange={handleDescription}></input>

                <label>Price</label>
                <input type='number' onChange={handlePrice}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Form