import { lazy } from 'react';

const Admin = lazy(() => import('../pages/Admin'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes = [
	{
		path: '',
		index: true,
		element: Home,
	},
	{
		path: 'product/:id',
		element: ProductDetail,
	},
	{
		path: 'admin',
		element: Admin,
	},
	{
		path: '*',
		element: NotFound,
	},
];

export default routes;
