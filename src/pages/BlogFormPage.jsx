import { redirect } from 'react-router-dom';
import BlogForm from '../components/BlogForm';
import { getCookie } from '../utils/getToken';
const BlogFormPage = () => {
	return <BlogForm />;
};

export async function loader() {
	const token = getCookie();

	if (!token) {
		return redirect('/auth?mode=login');
	}
	return null;
}
export async function action({ request }) {
	const data = await request.formData();
	const token = getCookie();
	const date = new Date();
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	const authData = {
		user_id: token,
		title: data.get('title'),
		description: data.get('description'),
		dateData: date.toLocaleDateString(undefined, options),
	};
	const response = await fetch(`http://localhost/blog_api/addentry.php`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(authData),
	});
	if (!response.ok) {
		throw json({ message: 'could not find web' }, { status: 404 });
	}
	return redirect('/blog');
}

export default BlogFormPage;
