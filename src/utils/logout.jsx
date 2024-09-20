import { redirect } from 'react-router-dom';
export function action() {
	const cookieName = 'id';
	document.cookie = cookieName + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
	return redirect('/');
}
