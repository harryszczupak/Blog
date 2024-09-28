import { useRouteLoaderData } from 'react-router-dom';
import DetailList from '../components/DetailList';
import { redirect } from 'react-router-dom';
const EntryDetailPage = () => {
	const data = useRouteLoaderData('entries_loader');
	return <DetailList data={data} />;
};

export async function action({ params }) {
	const response = fetch(`http://localhost/blog_api/delete_entry.php`, {
		method: 'POST',
		body: params.entryId,
	});
	return redirect('/blog');
}
export default EntryDetailPage;
