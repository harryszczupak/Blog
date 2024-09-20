import AuthForm from '../components/AuthForm';
import { json, redirect } from 'react-router-dom';

const AuthorizationPage = () => {
	return <AuthForm />;
};

export async function action({ request }) {
	const searchParam = new URL(request.url).searchParams;
	const mode = searchParam.get('mode') || 'login';
	if (mode !== 'login' && mode !== 'signup') {
		throw json({ message: 'Unsupported mode' }, { status: 422 });
	}
	const data = await request.formData();
	let authData;

	switch (mode) {
		case 'login':
			if (
				data.get('user').length == 0 ||
				data.get('password').length == 0 ||
				data.get('password').length < 8 ||
				!isNaN(data.get('user'))
			) {
				return null;
			}
			authData = {
				name: data.get('user'),
				password: data.get('password'),
			};

			break;
		case 'signup':
			if (
				data.get('user').length == 0 ||
				data.get('password').length == 0 ||
				data.get('email').length == 0 ||
				data.get('password').length < 8 ||
				!isNaN(data.get('user')) ||
				!data.get('email').includes('@')
			) {
				return null;
			}
			authData = {
				name: data.get('user'),
				password: data.get('password'),
				email: data.get('email'),
			};
	}

	const response = await fetch(`http://localhost/blog_api/${mode}.php`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(authData),
	});

	if (response.status === 422 || response.status === 401) {
		return response;
	}
	if (!response.ok) {
		throw json({ message: 'could not find web' }, { status: 404 });
	}
	const resData = await response.json();

	if (resData.id) {
		document.cookie =
			encodeURIComponent('id') +
			'=' +
			encodeURIComponent(resData.id) +
			'=' +
			'max-age=3600, secure';
	}

	return redirect('/');
}

export default AuthorizationPage;
