import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const HomePage = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:2345/ProductsList ').then((response) => {
			setProducts(...products, response.data);
			// console.log(response);
		});
	}, []);

	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					paddingTop: '175px',
				}}
			>
				{/* Iterate over products and show links */}
				{products.map((el) => {
					return (
						<Link to={`/${el.id}`} key={el.id}>
							{el.id}. {el.name}.{' '}
							{
								<img
									style={{ width: '300px', height: '300px' }}
									src={el.img}
								></img>
							}
						</Link>
					);
				})}
				;
			</div>
		</>
	);
};
