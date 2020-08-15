import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import apiRequest from './api/productApi';
import axios from 'axios'


import Routers from './routers';


function App() {

	const [product, setProduct] = useState([]);

	// Danh sách sản phẩm
	useEffect(() => {
		const getProducts = async () => {
			try {
				const { data } = await apiRequest.getAll();
				setProduct(data);
			} catch (error) {
				console.log('failed to request API: ', error)
			}
		}
		getProducts();
	}, []);

	const onHandleRemove = async (id) => {
		try {
			if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
				await apiRequest.remove(id);
				const { data } = await apiRequest.getAll();
				setProduct(data);
			}
		} catch (error) {
			console.log('failed to request API: ', error)
		}
	}

	// Thêm sản phẩm
	const onHandleAdd = async (product) => {
		try {
			await apiRequest.create(product);
			const { data } = await apiRequest.getAll();
			setProduct(data);
			alert("Thêm sản phẩm thành công")
		} catch (error) {
			console.log('failed to request API: ', error)
		}
	}

	// Cập nhật product 
	const onHandleUpdate = async (id, data) => {
		await apiRequest.update(id, data);
	}

	return (
		<div className="App">
			<Routers products={product} onRemove={onHandleRemove} onAdd={onHandleAdd} onUpdate={onHandleUpdate} />
		</div>
	);
}

export default App;
