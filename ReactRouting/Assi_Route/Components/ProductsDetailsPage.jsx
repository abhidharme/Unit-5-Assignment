import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const ProductsDetailsPage = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	useEffect(() => {
		axios.get(`http://localhost:2345/ProductsList/${id} `).then((response) => {
			setProduct(response.data);
			console.log(response);
		});
	}, []);
	console.log(product);
	return (
		<>
			<div
				style={{
					display: 'flex',
					paddingTop: '50px',
					justifyContent: 'center',
					textAlign: 'left',
				}}
			>
				<img src={`${product.img}`} style={{ width: '15%' }} alt="" />
				<div className="productDetails" style={{ padding: '20px' }}>
					<div>
						<h2 className="productName">{product.name}</h2>
						<h5 className="productPrice">Price : {product.price}</h5>
					</div>
					<h5>Specifications : </h5>
					<div style={{ width: '700px', paddingLeft: '30px' }}>
						{/* Show Product specification here */}
					</div>
				</div>
			</div>
		</>
	);
};
