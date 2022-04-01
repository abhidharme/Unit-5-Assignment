import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { Navbar } from './Navbar';
import { NotFoundPage } from './NotFoundPage';
import { ProductsDetailsPage } from './ProductsDetailsPage';
import { ProductsPage } from './ProductsPage';

export const Routers = () => {
	return (
		<>
			<Navbar />
			{/* Add Routesr here */}
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/products" element={<ProductsPage />}></Route>
				<Route path="/:id" element={<ProductsDetailsPage />} />
				{/* <Route path="/notfound" element={<NotFoundPage />}></Route>
				<Route path="/" element={<HomePage />}></Route> */}
			</Routes>
		</>
	);
};
