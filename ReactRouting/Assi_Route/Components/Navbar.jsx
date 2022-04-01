import { Link } from 'react-router-dom';
import React from 'react';

const links = [
	// Fix this links array, it's an array of objects {to: "", title: ""}
	{
		title: 'Home',
		to: '/',
	},
	{
		title: 'All Products',
		to: '/products',
	},
];

export const Navbar = () => {
	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				{links.map((el) => {
					return (
						<Link key={el.to} style={{ padding: '10px' }} to={el.to}>
							{el.title}
						</Link>
					);
				})}
			</div>
		</>
	);
};
