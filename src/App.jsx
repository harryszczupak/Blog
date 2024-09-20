import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './errors/ErrorPage';
import RootLayout from './Layout/RootLayout';
import Home from './pages/HomePage';
import BlogFormPage from './pages/BlogFormPage';
import AuthorizationPage from './pages/AuthorizationPage';
import { action as Auth_action } from './pages/AuthorizationPage';
import { action as Logout_action } from './utils/logout';
import { getCookie as TokenLoader } from './utils/getToken';
import { action as Blog_action } from './pages/BlogFormPage';
import { loader as Secure_Path_loader } from './pages/BlogFormPage';
import { loader as Entries_loader } from './pages/BlogEntries';
import BlogEntries from './pages/BlogEntries';
import EntryDetailPage from './pages/EntryDetailPage';
import { loader as Detail_loader } from './pages/EntryDetailPage';
const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		element: <RootLayout />,
		id: 'root',
		loader: TokenLoader,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'add_entry',
				element: <BlogFormPage />,
				action: Blog_action,
				loader: Secure_Path_loader,
			},
			{
				path: 'auth',
				element: <AuthorizationPage />,
				action: Auth_action,
			},
			{ path: 'logout', action: Logout_action },
			{
				path: 'blog',
				children: [
					{ index: true, element: <BlogEntries />, loader: Entries_loader },
					{
						path: ':entryId',
						element: <EntryDetailPage />,
						loader: Detail_loader,
					},
				],
			},
		],
	},
]);
const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
