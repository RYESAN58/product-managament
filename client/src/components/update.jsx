import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
	const {id} = useParams();
	const [title , setTitle] = useState()
	const [price , setPrice] = useState()
	const [description, setDescription] = useState()
	const navigate = useNavigate()

	useEffect(()=> {
		axios.get(`http://localhost:8000/api/${id}`)
			.then(res => {
				setDescription(res.data.description)
				setPrice(res.data.price)
				setTitle(res.data.title)
				console.log(res.data);
			})
			.catch( err => console.log(err))
	}, []);
		const updateProduct = (e) => {
			e.preventDefault();
			axios.put(`http://localhost:8000/api/${id}`, {
				title,
				price,
				description
			})
				.then(res => {
					console.log(res);
					navigate('/allProducts')
				})
				.catch(err => console.log(err))
		}
		const handleTitle = (e) => {
			setTitle(e.target.value)
	}
		const handleDescription = (e) => {
			setDescription(e.target.value)
	}
		const handlePrice = (e) => {
			setPrice(e.target.value)
	}
		return(
			<div>
				<h1>Update Product</h1>
				<form  onSubmit={updateProduct}>
					<p>
						<label>title</label>
						<input type="text" value={title} name='title' onChange={handleTitle}/>
					</p>
					<p>
						<label>price</label>
						<input type="number" value={price} name='price' onChange={handlePrice}/>
					</p>
					<p>
						<label>description</label>
						<input type="text" value={description} name='description' onChange={handleDescription}/>
					</p>
					<button type="submit"> update </button>
				</form>
			</div>
		)
}


export default Update;