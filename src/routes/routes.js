import { lazy } from 'react';

const AdminHome = lazy(() => import('../pages/admin/AdminHome'));
const ListUsers = lazy(() => import('../pages/admin/ListUsers'));
const CreateProduct = lazy(() => import('../pages/admin/CreateProduct'));
const ListProducts = lazy(() => import('../pages/admin/ListProduct'));
const UpdateProduct = lazy(() => import('../pages/admin/UpdateProduct'));
const CreateCategories = lazy(() => import('../pages/admin/CreateCategories'));
const ListCategories = lazy(() => import('../pages/admin/ListCategories'));
const CreateFeatures = lazy(() => import('../pages/admin/CreateFeatures'));
const ListFeatures = lazy(() => import('../pages/admin/ListFeatures'));
const UpdateFeatures = lazy(() => import('../pages/admin/UpdateFeatures'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
export const Register = lazy(() => import('../pages/users/Register'));
export const Login = lazy(() => import('../pages/users/Login'));
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));
const ProductSearch = lazy(() => import('../pages/ProductSearch'));
const Policies = lazy(() => import('../pages/Policies'));

const routes = [
	{
		path: '',
		index: true,
		element: Home,
	},
	{
		path: 'admin/users/list',
		element: ListUsers,
	},
	{
		path: 'product/:id',
		element: ProductDetail,
	},
	{
		path: 'productos/buscar/*',
		element: ProductSearch,
	},
	{
		path: 'policies',
		element: Policies,
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
		path: 'admin/products/list',
		element: ListProducts,
	},
	{
		path: 'admin/products/:id',
		element: UpdateProduct,
	},
	{
		path: 'admin/categories/create',
		element: CreateCategories,
	},
	{
		path: 'admin/categories/list',
		element: ListCategories,
	},
	{
		path: 'admin/features/create',
		element: CreateFeatures,
	},
	{
		path: 'admin/features/list',
		element: ListFeatures,
	},
	{
		path: 'admin/features/:id',
		element: UpdateFeatures,
	},
	// {
	// 	path: 'users/register',
	// 	element: Register,
	// },
	// {
	// 	path: 'users/login',
	// 	element: Login,
	// },
	{
		path: '*',
		element: NotFound,
	},
];

export default routes;
