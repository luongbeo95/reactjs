import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios'


import Routers from './routers';


function App() {

	const [product, setProduct] = useState([]);

	axios({
		method: 'GET',
		url: 'https://5f13a2bc2710570016b37801.mockapi.io/api/products',
		data: null
	}).then(res => {
		setProduct(res.data)
	}).catch(err => {
		console.log(err);
	});

	const onHandleRemove = (id) => {
		if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
			axios({
				method: 'DELETE',
				url: 'https://5f13a2bc2710570016b37801.mockapi.io/api/products/' + id,
				data: null
			}).catch(err => {
				console.log(err);
			});
		}
	}

	return (
		<div className="App">
			<Routers products={product} onRemove={onHandleRemove} />
		</div>
	);
}

export default App;
