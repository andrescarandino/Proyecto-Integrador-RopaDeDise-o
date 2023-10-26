import { lazy } from 'react';

const AdminHome = lazy(() => import('../pages/admin/AdminHome'));
const CreateProduct = lazy(() => import('../pages/admin/CreateProduct'));
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
		element: AdminHome,
	},
	{
		path: 'admin/products/create',
		element: CreateProduct,
	},
	{
		path: '*',
		element: NotFound,
	},
];

export default routes;
