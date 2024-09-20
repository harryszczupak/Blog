const EntryDetailPage = () => {
	return <p>siema</p>;
};

export async function loader({ params }) {
	console.log(params);
	return null;
}
export default EntryDetailPage;
