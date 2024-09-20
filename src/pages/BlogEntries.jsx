import { json } from 'react-router-dom';
import BlogList from '../components/BlogList';
import { useLoaderData } from 'react-router-dom';
const BlogEntries = () => {
	const data = useLoaderData();
	return <BlogList data={data} />;
};

export async function loader() {
	console.log('siema');

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
