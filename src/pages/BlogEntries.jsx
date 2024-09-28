import { json } from 'react-router-dom';
import BlogList from '../components/BlogList';
import { useRouteLoaderData } from 'react-router-dom';
const BlogEntries = () => {
	const data = useRouteLoaderData('entries_loader');
	return <BlogList data={data} />;
};

export async function loader() {
	const respone = await fetch(`http://localhost/blog_api/get_entry.php`, {
		method: 'get',
	});
	if (!respone.ok) {
		throw json({ message: 'Could not fetch data' }, { status: 500 });
	}
	const data = await respone.json();
	return data;
}
export default BlogEntries;
